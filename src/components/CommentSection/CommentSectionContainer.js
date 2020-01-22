// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("comment section", props)
  const [comments, setComments]= useState (props.comments)
  return (
    <div>
      {comments.map(info=>
        {return <Comment comment={info}/>})}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
