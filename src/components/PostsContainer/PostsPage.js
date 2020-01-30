//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = ({ dummyData }) => {
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((data, i) => {
        return <Post key={i} post={data} />
      })}
    </div>
  );
};

export default PostsPage;

