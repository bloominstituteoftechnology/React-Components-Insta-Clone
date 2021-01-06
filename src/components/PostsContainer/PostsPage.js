//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = (props) => {
  console.log(props);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {props.post.map( (element, index) => {
        return <div key={index}>{element}</div>
      })}
  
    </div>
  );
};

export default PostsPage;
