// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  console.log("CommentSection", props);
  const [comments, setComments] = useState(props.comments);

  return (
    <div>
      {comments.map((obj) => {
        return <Comment key={comments.username} comment={obj} />;
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
