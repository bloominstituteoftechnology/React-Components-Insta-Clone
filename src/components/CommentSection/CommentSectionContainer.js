// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log('from CommentSection', props)
  const [comments, setComments] = useState(props.comments[0])

  return (
    <div>
      {props.comments.map(obj => {
        return <Comment comment={obj} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
