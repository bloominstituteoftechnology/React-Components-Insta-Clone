// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment] = useState(props.comments);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <Comment comment={comment} />
      {comment.map(function(p, index) {
        return <Comment key={index} comment={p} />;
      })}
      <CommentInput />
    </div>
  );
};

    
export default CommentSection;
