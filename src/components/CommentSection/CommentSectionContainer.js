// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('CommentSection props: ', props)
  const {postId, comments} = props;
  const [comment, setComment] = useState([comments])
  const submitComment = (e) => {
    e.preventDefault();
    setComment({...comment, [e.target.name]: e.target.value})
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((item, index) => {
        console.log(item)
        return (
          <div key={`${props.postId}${index}`}>
            <Comment username={item.username} text={item.text} />
          </div>
          )
      })
    }
      <CommentInput submitComment={submitComment} setComment={setComment} comment={comment} />
    </div>
  );
};

export default CommentSection;
