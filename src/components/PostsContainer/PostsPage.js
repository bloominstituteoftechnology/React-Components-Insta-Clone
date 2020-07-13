//Complete the necessary code in this file
// import useState
import React from "react";
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"
const PostsPage = () => {
  const [state] =useState(dummyData)
  console.log(state)
  return (
    <div className="posts-container-wrapper">
       {data.map(posts=>{
      	return(
      		<Post post={posts} />
      		)
      })}
    </div>
  );
};

export default PostsPage;
