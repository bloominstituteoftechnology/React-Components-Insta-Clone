//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import { useState } from 'react'
// import data 
import postData from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data
    const [posts, setPosts] = useState(postData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {
        posts.map((obj => {
          return <Post post={obj}/>
        }))
      }
    </div>
  );
};

export default PostsPage;
