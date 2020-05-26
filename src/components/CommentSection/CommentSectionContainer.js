// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment,setComment] = useState()

  return (
    <div>
      {comment.map((obj,index)=>{
        return <Comment comment={obj} key={index}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
