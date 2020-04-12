// You will add code to this file
import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import dummyData from "../../dummy-data";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [commentSect, setCommentSect] = useState([]);

useEffect(() => {
  dummyData.map(data => setCommentSect(data.comments));
}, []);


  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {commentSect.map((comment, index) => {

       return (<div>  <Comment 
       
        key={index}
        comments={comment}

       />    <CommentInput />
       
       </div>


    
      
        )})
    }   
    </div>
  );
};

export default CommentSection;
