// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  let [allComments,addComment] = useState(props.comments)
  let [currentComment,UpdateComment] = useState('')

  console.log(props.allComments)

  const addComments = ()=>{
  	let newData = allComments;
  	newData.push({username:"ofrepose", text:"sdfgsg"})
  	console.log(`new data is ${newData}`)
  	addComment(newData)

  }
  console.log(typeof allComments)
  console.log(allComments)

  const getComment = () => {
  	UpdateComment(currentComment = currentComment + CommentInput.value)
  	
  }
  console.log(currentComment)
  return (
    <div>
     
      {allComments.map(item=>{
      	return(
      		<Comment comment = {item} />
      		)
      })}
      <CommentInput submitComment = {addComments}  />
    </div>
  );
};

export default CommentSection;
