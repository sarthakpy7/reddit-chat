import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          username={comment.username}
          content={comment.content}
          timestamp={comment.timestamp}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default Comments;
