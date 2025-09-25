import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function AddDiscussion({ onAdd }) {
  const [title, setTitle] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !user) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div>
      {user ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Start a new discussion..."
          />
          <button type="submit">Add</button>
        </form>
      ) : (
        <p>Login to start a discussion</p>
      )}
    </div>
  );
}
