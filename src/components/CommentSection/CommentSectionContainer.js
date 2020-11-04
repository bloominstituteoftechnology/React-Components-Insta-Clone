// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  // console.log("commentsProps", props.comments);
  const [comments, setComments] = useState(props.comments);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
       {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}
      <CommentInput />
    </div>
    )
  };

export default CommentSection;
