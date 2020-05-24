// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
let [allComments, addComment] = useState(props.comments)
let [currentComments, UpdateComment] = useState('')

console.log(props.allComments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {allComments.map(item => {
        return <Comment comment={item} />;
      })}
      <CommentInput submitComment = {addComment} />
    </div>
  );
};

export default CommentSection;
