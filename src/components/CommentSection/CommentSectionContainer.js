// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
console.log(props.comments);
const [comment] = useState(props.comments); 
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(c=>(
        <Comment key = {c.id} user = {c.username} comment = {c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
