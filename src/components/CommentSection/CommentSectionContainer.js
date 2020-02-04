// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
const [commentText, setCommentText] = useState(props.comments)

  // Add state for the comments

  return (
    <div>
      {commentText.map((commentStr , index)=> {
        return <div key={index}> <Comment comment= {commentStr} /> </div>
      }) }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
