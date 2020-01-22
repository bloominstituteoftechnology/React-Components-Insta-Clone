// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState("");

  function changeComment(evt) {
    setComment(evt.target.value);
  }

  function submitComment(e) {
    e.preventDefault();
    setComments(comments.concat([{username: 'Anonymous', text: comment}]));
    console.log(comments);
  }

  return (
    <div>
      {comments.map(comment => <Comment comment={comment}/>)}
      <CommentInput comment={comment} changeComment={changeComment} submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
