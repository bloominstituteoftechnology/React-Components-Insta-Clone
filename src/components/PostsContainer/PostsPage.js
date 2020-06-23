//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "./dummy-data.js";
// import data 

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">

  {dummyData.map(element =>  <Post post={element}/> ) }
      
    </div>
  );
};

export default PostsPage;
