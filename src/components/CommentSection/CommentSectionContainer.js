// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = ({ comments }) => {
  // Add state for the comments
  // console.log(comments);
  const [newComments, setComments] = useState(comments);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {newComments.map((item, index) => (
        <Comment username={item.username} text={item.text} key={index} />
      ))}
      <CommentInput newComments={newComments} setComments={setComments} />
    </div>
  );
};

export default CommentSection;
