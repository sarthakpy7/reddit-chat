// src/App.js

import React from 'react';
import Post from './components/Post';
import CommentsList from './components/CommentsList'; // Import CommentsList
import { post, comments } from './Data'; // Make sure data is correctly imported

const App = () => {
  return (
    <div className="app">
      {/* Rendering the Post */}
      <Post
        username={post.username}
        content={post.content}
        timestamp={post.timestamp}
        avatar={post.avatar}
      />
      
      {/* Rendering the Comments List (Virtualized) */}
      <CommentsList comments={comments} />
    </div>
  );
};

export default App;
