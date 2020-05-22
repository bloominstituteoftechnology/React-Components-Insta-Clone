// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import TimeStamp from './TimeStamp';

const CommentSection = props => {
  // Add state for the comments
  
  //const [comment, useState] = useState(props.comments);
  console.log('comments', props.comments);
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */}


      {props.comments.map(item => {

        return <Comment comment={item} />

      })}

      <TimeStamp timePost = {props.timeStamp} />

      <CommentInput />

    </div>

  );

};

export default CommentSection;
