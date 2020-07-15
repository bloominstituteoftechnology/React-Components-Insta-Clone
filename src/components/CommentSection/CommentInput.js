// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = props => {

  const [comment, setComment] = useState([])

  const changeComment = () => {
    setComment(comment)
  }

  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeComment}
      />
    </form>
  );
};

export default CommentInput;
