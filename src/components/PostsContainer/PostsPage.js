//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("props", props)
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(pData => (
        <Post
          key = {pData.imageUrl}
          post2 = {pData}
        />
      ))}
      {/* map through data here */}

    </div>
  );
};

export default PostsPage;

