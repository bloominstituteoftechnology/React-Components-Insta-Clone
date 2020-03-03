//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
import LikeSection from "./LikeSection";

// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [data, updateData] = useState(dummyData)

  
  return (
    <div className="posts-container-wrapper">
      {data.map()}
    </div>
  );
};

export default PostsPage;

