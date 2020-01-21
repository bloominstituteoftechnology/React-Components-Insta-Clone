import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comments.username}</span>
      {' '}
      <span className="comment">{props.comments.text}</span>
    </div>
  );
};


export default Comment;
