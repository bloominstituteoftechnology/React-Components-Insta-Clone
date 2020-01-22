//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.myData.map(item => {
        <Post
         key={p.imageUrl}
         dataFromParent={p}
         />

      })}
    </div>
  );
};

export default PostsPage;

