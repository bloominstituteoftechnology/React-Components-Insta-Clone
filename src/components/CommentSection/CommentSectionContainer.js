// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import "./Comment.css";
import Comment from "./Comment";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComment] = useState(props.comments);
  console.log("comment", props);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default CommentSection;
