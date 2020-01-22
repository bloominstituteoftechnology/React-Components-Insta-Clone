// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('comment',props);

  //destructuring comments
  const [Com] = useState(props.comments);

  return (
    
    <div>
  {/*map through comments, must have unique key so the index parameter is being used*/}
      {Com.map((item, index) => <Comment key={index} comment={item} /> )}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
