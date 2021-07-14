
import './Comments.css';
import Comment from './Comment';
import React from 'react';
const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      { comments.map( (comment, i) =>  {
        return (
          <Comment key={i} comment={comment} /> 
        )
       }) }
    </div>
  );
};

export default Comments;
