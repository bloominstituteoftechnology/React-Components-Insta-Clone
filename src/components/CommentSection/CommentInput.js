// You do not need to do anything in this file
import React from 'react';

const CommentInput = commentInput => {
  return (
    <form className="comment-form" onSubmit={commentInput.submitComment}>
      <input
        type="text"
        value={commentInput.comment}
        placeholder="Add comment... "
        onChange={commentInput.changeComment}
      />
    </form>
  );
};

export default CommentInput;
