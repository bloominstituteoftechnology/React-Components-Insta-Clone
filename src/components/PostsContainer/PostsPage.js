//Complete the necessary code in this file
import React from "react";
import PostHead from "./PostHeader";
import Post from "./Post";
import Likes from "./LikeSection";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const Postspages = props => {
  console.log(" the props", props);
  return (
    <div className="posts-container-wrapper">
      {props.post}
      {/* map through data here */}
    </div>
  );
};

export default PostsPage;

