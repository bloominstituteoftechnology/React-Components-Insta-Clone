// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
let [comments, setComments] = useState(props.comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
      {comments.map(item => {
        return <Comment comment={item} />
      })}
    </div>
  );
};

export default CommentSection;
