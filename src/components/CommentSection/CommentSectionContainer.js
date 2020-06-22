// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('CommentSection props: ', props)
  const {postId, comments} = props;
  const [comment, setComment] = useState(comments)

  const submitComment = (e) => {
    e.persist();
    setComment({...comment, [e.target.name]: e.target.value})
  }
  const changeComment = (e) => {
    e.preventDefault();
    setComment({[e.target.name]: e.target.value});
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(item => {
        return (
          <div>
            <Comment comment={comment} setComment={setComment}/>
          </div>
          )
      })
    }
      <CommentInput props={comments} submitComment={submitComment} changeComment={changeComment}/>
    </div>
  );
};

export default CommentSection;
