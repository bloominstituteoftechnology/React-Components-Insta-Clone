//Complete the necessary code in this file
import React, { useState } from "react";
// import useState
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  const [posts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {posts.map(p => (
        <Post key={p.imageUrl} dataFromParent={p} />
      ))}
        </div>
  );
};

export default PostsPage;

