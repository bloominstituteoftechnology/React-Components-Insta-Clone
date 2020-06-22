// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const comments = useState(Comment);
  return (
    <div>
      {/* map through the comments data and return the Comment component */
        comments.map(props)
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
