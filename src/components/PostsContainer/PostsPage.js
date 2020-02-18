//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = (props) => {
  // set up state for your data
  let [data] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {data.map(p => (
        <Post
        key = {p.imageUrl}
        post = {p}
        />
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
       
    </div>
  );
};

export default PostsPage;