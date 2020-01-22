// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments using the state 'comment'
  const [comment] = useState(props);
  return (
    <div>
      {props.comments.map((item) => (
        <Comment comment={item} key={item.username} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
