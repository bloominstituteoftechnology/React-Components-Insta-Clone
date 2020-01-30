// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [ comments, setComments ] = useState(props.comments)
  const [ commentInput, setCommentInput ] = useState("")

  const onEnterKeyDown = (e) => {
    e.preventDefault()
    const newComment = {
      username: "th0mmy_g",
      text: commentInput
    }
    setComments([...comments, newComment])
  }

  console.log(comments)

  return (
    <div>
      {comments.map((comment, i) => <Comment key={i} comment={comment} />)}
      <CommentInput onEnterKeyDown={onEnterKeyDown} setCommentInput={setCommentInput} />
    </div>
  );
};

export default CommentSection;
