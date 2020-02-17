// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;
