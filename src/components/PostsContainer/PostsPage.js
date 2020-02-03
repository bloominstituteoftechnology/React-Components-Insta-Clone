//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  const {data} = props
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {data.map(i => (
        <Post data = {i}/>
      ))}
    </div>
  );
};

export default PostsPage;

