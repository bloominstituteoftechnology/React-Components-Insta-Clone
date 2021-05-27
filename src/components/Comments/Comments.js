import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map((com) => (
        <Comment comment={com} />
      ))};
    </div>
  );
};

export default Comments;
