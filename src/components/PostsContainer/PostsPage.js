//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';
// import data 

const PostsPage = () => {
  const [data, setData] = useState(dummyData[0])
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((obj, index) => {
        return <Post key={index} post={obj} />
      })
      }
    </div>
  );
};

export default PostsPage;
