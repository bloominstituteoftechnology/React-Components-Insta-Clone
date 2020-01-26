// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import {dummyData} from '.././../dummy-data'

const CommentSection = props => {
  // Add state for the comments
  const [addComment, setAddComment] = useState(props.comments);

  // const comments = () =>{
  //   setAddComment(addComment);
  // }

  console.log('props comment ~~~>', props)
  console.log('props addcomment ---> ', addComment)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* This is the part the comments are suposed to show */}
  {/* {addComment.map((comment, index) => <Comment key={index} comment={comment}/>)} */}
  {addComment.map((comment, index) => <Comment key={index} string={'Lambda school'} comment={comment}/>)}
 {/* <Comment /> */}
    {console.log('addcomment ... >', addComment)}
    <CommentInput/>
    </div>
  );
};

export default CommentSection;
