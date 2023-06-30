import React from 'react';
import Comment from './Comment';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div className='comments-wrapper'>
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
