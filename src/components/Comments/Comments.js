import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {Comments.map(comment => (
      <Comment key = {p.id} comment = {comment}  />
      ))}
    </div>
  );
};

export default Comments;
