// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  return (
    <div>
      {data.CommentSection.map(comment=> {return <Comment comment={comment}}
      )}
      />
    </div>
  );
};

export default CommentSection;
