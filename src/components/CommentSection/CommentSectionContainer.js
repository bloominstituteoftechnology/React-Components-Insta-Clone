// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
 
console.log(props);

const [comments, setComments] =useState(props.comments);
const [comment, setComment] = useState("");

const changeComment = (event) => {
  setComment(event.target.value)
};
  
const submitComment = (event) => {
  event.target.preventDefault();
  comments.push(
    {username: "User" , 
    text: comment });
    setComments(comments);
    setComment("");
};
  return (
    <div className="comment-wrapper">
      {/* map through the comments data and return the Comment component */}
      {comments.map((item, i) => {
        return <Comment key={i} comment={item} />
      })}
      <CommentInput comment={comment} changeComment={changeComment} submitComment={submitComment} 
     />
    
    </div>
          
 
      
  );
};

export default CommentSection;
