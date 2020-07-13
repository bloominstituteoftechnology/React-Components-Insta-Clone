// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  const {submitComment, comment, changeComment} = props;
  
  return (
    <form className="comment-form" onSubmit={submitComment}>
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        onChange={() => changeComment}
      />
    </form>
  );
};

export default CommentInput;
