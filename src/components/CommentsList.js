// src/components/CommentsList.js

import React from 'react';
import { FixedSizeList as List } from 'react-window';
import Comment from './Comment'; // Adjust the path based on where your Comment component is located

const CommentsList = ({ comments }) => {
  const renderRow = ({ index, style }) => (
    <div style={style}>
      <Comment
        key={comments[index].id}
        username={comments[index].username}
        content={comments[index].content}
        timestamp={comments[index].timestamp}
        avatar={comments[index].avatar}
        replies={comments[index].replies}
      />
    </div>
  );

  return (
    <List
      height={600} // Height of the visible area
      itemCount={comments.length}
      itemSize={150} // Height of each comment
      width={800} // Width of the list
    >
      {renderRow}
    </List>
  );
};

export default CommentsList;
