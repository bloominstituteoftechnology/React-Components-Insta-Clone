// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comment.map(comment => {
        return <Comment comment={comment} />
      })}
    </div>
  );
};
export default Comment;
