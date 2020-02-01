// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log(props);
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  console.log(comments);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
