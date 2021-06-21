import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {
        return <Comment comment={comment} key={comment.id} username={comment.username} text={comment.text} />
      })}
    </div>
  );
};

export default Comments;
