import React, { useState } from "react";

export default function PostList({ posts, onAddPost, onDeletePost, currentUser }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddPost(text);
      setText("");
    }
  };

  return (
    <div className="post-list mt-4">
      <h4 className="mb-3">Posts</h4>
      <ul className="list-group mb-3">
        {posts.map((post) => (
          <li
            key={post._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <p className="mb-1">{post.text}</p>
              <small className="text-muted">— {post.author}</small>
            </div>
            {post.author === currentUser && (
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDeletePost(post._id)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Write a post..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
