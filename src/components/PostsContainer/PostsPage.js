//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import theData from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(theData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(p => <Post post={p} />)}
    </div>
  );
};

export default PostsPage;
