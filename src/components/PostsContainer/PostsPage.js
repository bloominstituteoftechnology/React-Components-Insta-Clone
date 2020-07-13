//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data"
const PostsPage = () => {
  // set up state for your data
  const [postInfo, setPostInfo] = useState(data)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        postInfo.map((postObj, index) => {
          return <Post key = {index} post = {postObj} />

        })
      }
    </div>
  );
};

export default PostsPage;
