// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [commentSect, setCommentSect] = useState(props.comments);

// useEffect(() => {
//   dummyData.map(data => setCommentSect([data]));
// }, []);


  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {commentSect.map((comment, index) => <Comment key={index} comment={comment} />)}
      <CommentInput/> 
    </div>
  );
};

export default CommentSection;
