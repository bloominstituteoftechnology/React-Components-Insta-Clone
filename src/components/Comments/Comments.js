import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, post } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      { post.comments.map(comment => {
        return <Comment key={comments.id} comment={comment} />
      })}
    </div>
  );
};

export default Comments;
