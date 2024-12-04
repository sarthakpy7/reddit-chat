import React, { useState } from 'react';

const Comment = ({ username, content, timestamp, avatar, replies }) => {
  const [showReplies, setShowReplies] = useState(false);

  // Default avatar fallback
  const defaultAvatar = "https://via.placeholder.com/40"; // Use default avatar URL
  
  // Fallback for broken avatar images
  const handleImageError = (e) => {
    e.target.src = defaultAvatar; // Set fallback avatar on error
  };

  return (
    <div className="comment">
      {/* Comment Header: Avatar, Username, and Timestamp */}
      <div className="comment-header">
        <img
          className="user-icon"
          src={avatar || defaultAvatar}
          alt={`${username}'s Avatar`}
          onError={handleImageError}
        />
        <div>
          <p className="username">{username}</p>
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>

      {/* Comment Content */}
      <p className="comment-content">{content}</p>

      {/* Show Replies Button */}
      {replies.length > 0 && (
        <button
          className="toggle-replies"
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Hide Replies" : `Show Replies (${replies.length})`}
        </button>
      )}

      {/* Replies Section */}
      {showReplies && (
        <div className="replies">
          {replies.map((reply) => (
            <div key={reply.id} className="comment">
              <div className="comment-header">
                <img
                  className="user-icon"
                  src={reply.avatar || defaultAvatar}
                  alt={`${reply.username}'s Avatar`}
                  onError={handleImageError}
                />
                <div>
                  <p className="username">{reply.username}</p>
                  <p className="timestamp">{reply.timestamp}</p>
                </div>
              </div>
              <p className="comment-content">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
