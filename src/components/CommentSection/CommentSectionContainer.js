// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  //console.log(props);

  return (
    <div key={props.postId}>
      {props.comments.map((comment, index) => (
      	<Comment key={index} comment={comment} />
      ))};
      <CommentInput />
    </div>
  );
};

export default CommentSection;
