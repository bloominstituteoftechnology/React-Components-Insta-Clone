// You do not need to change this file.
import React from "react";

const Comment = (props) => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comments } = props;

  return (
    <div className="comment-text">
      <span className="user">{comments.username}</span>{" "}
      <span className="comment">{comments.text}</span>
    </div>
  );
};

export default Comment;
