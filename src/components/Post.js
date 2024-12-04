import React from "react";

const Post = ({ username, content, timestamp, avatar }) => {
  // Default avatar in case none is provided
  const defaultAvatar = "https://www.flaticon.com/free-icon/avatar_6858504";

  // Fallback for broken avatar images
  const handleImageError = (e) => {
    e.target.src = defaultAvatar; // Fallback to default avatar
  };


  return (
    <div className="post">
      {/* Post Header: Avatar, Username, and Timestamp */}
      <div className="post-header">
        <img
          src={avatar || defaultAvatar} // Use provided avatar or fallback to default
          alt={`${username}'s Avatar`}
          className="user-icon"
          onError={handleImageError} // Fallback for broken images
        />
        <div>
          <p className="username">{username}</p>
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
