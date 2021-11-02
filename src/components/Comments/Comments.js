import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map((com, index )=> {
        return <div> <Comment key={index} comment={comments}/> </div>
      })}
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
