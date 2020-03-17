// You will add code to this file
import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments]= useState(props.comments)// Add state for the comments

  return (
    <div>
      {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
