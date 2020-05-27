//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';
// import data 

const PostsPage = () => {
  const [data] = useState(dummyData)
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {data.map(obj => {
        return <Post key={obj.username} post={obj} />
      })
      }
    </div>
  );
};

export default PostsPage;
