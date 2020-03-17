// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
// import dummyData from "../../dummy-data";


const CommentSection = props => {
  // Add state for the comments
 const [commentData] = useState(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */
      commentData.map(item => (
        console.log(item),
        <Comment key={item.comments} comment={item} />
      ))}
      
      <CommentInput />
    </div>
  );
};

export default CommentSection;
