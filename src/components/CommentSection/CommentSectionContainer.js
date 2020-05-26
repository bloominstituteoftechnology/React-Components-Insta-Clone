// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  // const[comments] = useState(props.comments);
console.log(props);
  return (
    <div>
      {/* map through the comments data and return the Comment component */
        // comments.map (eachComment => (<Comment comments={eachComment}/>))
      }
      {props.comments.map(c =>
        <Comment comment = {c} />
      )}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
