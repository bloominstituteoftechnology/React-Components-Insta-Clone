//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"


const PostsPage = (props) => {
   const dummy= dummyData
  return (
    <div className="posts-container-wrapper">
      {dummy.map((obj, index )=> {
        return <Post post={obj} key={index}/>
      })}
    </div>
  );
};

export default PostsPage;
