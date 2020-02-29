// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments] = useState(props.comments);
  console.log("This is from CommentSectionContainer ", props);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((c, index) => (
        <Comment key={index} comment={c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
