// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data"
const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(dummyData);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(c => (
           <Comment comment={c.comments}/>

      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
