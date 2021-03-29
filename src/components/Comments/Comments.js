import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => <Comment comment={comment} />)}
    </div>
  );
};

export default Comments;
