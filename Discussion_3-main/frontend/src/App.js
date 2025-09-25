import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./AuthContext";
import DiscussionList from "./DiscussionList";
import PostList from "./PostList";
import AddDiscussion from "./AddDiscussion";
import Login from "./Login";
import CustomNavbar from "./Navbar";      // ✅ new
import Hero from "./Hero";                // ✅ new
import ThreeColumn from "./ThreeColumn";  // ✅ new
import Footer from "./Footer";            // ✅ new
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppContent() {
  const { user, logout } = useAuth();
  const [discussions, setDiscussions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ Fetch discussions from backend
  useEffect(() => {
    if (user) {
      fetch("http://localhost:8080/api/discussions")
        .then((res) => res.json())
        .then((data) => setDiscussions(data))
        .catch((err) => console.error("Error fetching discussions:", err));
    }
  }, [user]);

  // ✅ Add discussion
  const handleAddDiscussion = async (title) => {
    if (!title || !user) return;
    const res = await fetch("http://localhost:8080/api/discussions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, createdBy: user.username }),
    });
    const newDiscussion = await res.json();
    setDiscussions((prev) => [...prev, newDiscussion]);
  };

  // ✅ Delete discussion
  const handleDeleteDiscussion = async (id) => {
    await fetch(`http://localhost:8080/api/discussions/${id}`, {
      method: "DELETE",
    });
    setDiscussions((prev) => prev.filter((d) => d._id !== id));
    setSelectedIndex(0);
  };

  // ✅ Add post
  const handleAddPost = async (discussionId, text) => {
    if (!text || !user) return;
    const res = await fetch(
      `http://localhost:8080/api/discussions/${discussionId}/posts`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, author: user.username }),
      }
    );
    const updatedDiscussion = await res.json();
    setDiscussions((prev) =>
      prev.map((d) => (d._id === discussionId ? updatedDiscussion : d))
    );
  };

  // ✅ Delete post
  const handleDeletePost = async (discussionId, postId) => {
    await fetch(
      `http://localhost:8080/api/discussions/${discussionId}/posts/${postId}`,
      { method: "DELETE" }
    );
    setDiscussions((prev) =>
      prev.map((d) =>
        d._id === discussionId
          ? { ...d, posts: d.posts.filter((p) => p._id !== postId) }
          : d
      )
    );
  };

  // ✅ Like / Dislike
  const handleVote = async (discussionId, type) => {
    const res = await fetch(
      `http://localhost:8080/api/discussions/${discussionId}/vote`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user.username, type }),
      }
    );
    const updatedDiscussion = await res.json();
    setDiscussions((prev) =>
      prev.map((d) => (d._id === discussionId ? updatedDiscussion : d))
    );
  };

  // ✅ If no user → show login page
  if (!user) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <CustomNavbar />     {/* Navbar stays even on login page */}
        <main className="container my-5">
          <Login />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar user={user} onLogout={logout} />

      {/* Hero & 3-Column Section (lab requirement) */}
      <Hero />
      <ThreeColumn />

      {/* Discussions */}
      <main className="container my-5" id="discussions">
        <div className="row g-3">
          <aside className="col-md-4">
            <AddDiscussion onAdd={handleAddDiscussion} />
            <DiscussionList
              discussions={discussions}
              onSelect={setSelectedIndex}
              onDelete={handleDeleteDiscussion}
              onVote={handleVote}
              selectedIndex={selectedIndex}
              currentUser={user.username}
            />
          </aside>

          <section className="col-md-8">
            {discussions[selectedIndex] && (
              <PostList
                posts={discussions[selectedIndex].posts || []}
                onAddPost={(text) =>
                  handleAddPost(discussions[selectedIndex]._id, text)
                }
                onDeletePost={(postId) =>
                  handleDeletePost(discussions[selectedIndex]._id, postId)
                }
                currentUser={user.username}
              />
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
