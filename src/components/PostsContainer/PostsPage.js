//Complete the necessary code in this file
// import useState
import React, {Component, useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const PostsPage = (props) => {
  // set up state for your data
  const [username, setUserName] = useState()

  return (
    <div className="posts-container-wrapper">
      {dummyData.map( item => (
        <Post  key = {item.username} post = {item} />
        
      ))}
    
    </div>
  );
};

export default PostsPage;

  {/* <LikeSection /> */}
      {/* <Post /> */}
      {/* <PostHeader/>map through data here to return a Post and pass data as props to Post */}