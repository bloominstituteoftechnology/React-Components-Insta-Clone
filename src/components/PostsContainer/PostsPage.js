//Complete the necessary code in this file
import React from "react";
import PostHead from "./PostHeader";
import Post from "./Post";
import Likes from "./LikeSection";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {props.post}
      {/* map through data here */}
      {props.data.map((item, index, array) => (
        <Post key={item.timestamp} post={item}/>
      ))}
    </div>
  );
};

export default PostsPage;

