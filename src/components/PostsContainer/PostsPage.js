//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import { useState } from 'react';
import "./Posts.css";
import dummyData from "../../dummy-data.js";

// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
     {data.map((index) => {
      return <Post key ={index.id} post = {index} />
      })
      }
    </div>
  );
};

export default PostsPage;
