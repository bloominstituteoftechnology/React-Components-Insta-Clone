// You will add code to this file
import React, { useState, useReducer } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props)
  const [comment] = useState(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(item => (
        <Comment key ={item.username} comment={item} />
      ))}
      <CommentInput  />
    </div>
  );
};

export default CommentSection;
