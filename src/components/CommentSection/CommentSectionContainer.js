// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // console.log(props)
  const [comment] = useState(props.comments)
  return (
    <div>
      {comment.map(item => (
      <Comment key={item.username} comment={item} />
      ))}

      <div className="timestamp">{props.timestamp}</div>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
