// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = (props) => {
  // Add state for the comments
  const [commen] = useState(props.comments);

  return (
    <div>
      {commen.map((d) => {
        return (
          <div>
            <Comment comment={d} />
          </div>
        );
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;


