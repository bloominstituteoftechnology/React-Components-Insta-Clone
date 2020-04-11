// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [commentSect, setCommentSect] = useState(Comment);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {commentSect.map((commentObj, index) => {

       return ( <CommentInput 
       
        key={index}
        comment={commentObj}
        setCommentSect={setCommentSect}

       />
      
        )})
    }
    </div>
  );
};

export default CommentSection;
