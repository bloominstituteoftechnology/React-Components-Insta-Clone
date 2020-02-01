// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  console.log(comments);
  return (
    <div>
      {comments.map((text) => (
        <Comment 
          key={text.username}
          comment={text}
        />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
