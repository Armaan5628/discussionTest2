import React from "react";

export default function DiscussionList({
  discussions,
  onSelect,
  onVote,
  onDelete,
  selectedIndex,
  currentUser,
}) {
  return (
    <div className="list-group">
      {discussions.map((discussion, index) => (
        <div
          key={discussion._id}
          className={`card mb-3 shadow-sm ${
            index === selectedIndex ? "border-primary" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(index)}
        >
          <div className="card-body">
            <h5 className="card-title text-dark">{discussion.title}</h5>
            <p className="card-subtitle text-muted">
              Created by <strong>{discussion.createdBy}</strong>
            </p>

            <div className="d-flex align-items-center mt-3">
              {/* Like Button */}
              <button
                className="btn btn-outline-success btn-sm me-2"
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(discussion._id, "like");
                }}
              >
                <i className="bi bi-hand-thumbs-up"></i> {discussion.likes}
              </button>

              {/* Dislike Button */}
              <button
                className="btn btn-outline-danger btn-sm me-3"
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(discussion._id, "dislike");
                }}
              >
                <i className="bi bi-hand-thumbs-down"></i> {discussion.dislikes}
              </button>

              {/* Delete (only if current user is creator) */}
              {discussion.createdBy === currentUser && (
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(discussion._id);
                  }}
                >
                  <i className="bi bi-trash"></i> Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
