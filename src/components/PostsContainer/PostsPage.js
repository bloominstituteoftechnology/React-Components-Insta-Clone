//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log(props.postData)
  return (
    <div className="posts-container-wrapper">
      {props.postData.map((dummyStr, index) =>{
        return <div key={index}> <Post post = {dummyStr} /> </div>
      })}
    </div>
  );
};

export default PostsPage;

