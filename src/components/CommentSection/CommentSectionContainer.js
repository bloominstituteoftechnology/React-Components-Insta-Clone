// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [userComments] = useState(props.comments)
  return (
    <div>
      {userComments.map(commentObj => {
        return (
          <Comment comment = {commentObj} />
          
        )
      
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
