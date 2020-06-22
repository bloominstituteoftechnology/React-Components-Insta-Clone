// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('CommentSection props: ', props)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput props={props.comments}/>
    </div>
  );
};

export default CommentSection;
