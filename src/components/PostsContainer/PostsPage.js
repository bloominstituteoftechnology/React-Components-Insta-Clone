//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
//import dummyData from '../../dummy-data';

const PostsPage = (props) => {
  // set up state for your data

  return (
    
    <div className="posts-container-wrapper">

      {props.myData.map(item => (
      
        <Post
        
        key = {item.imageUrl}
        datasData = {item}
        
        />
      
      ))}
    
    </div>
  
  );

};

export default PostsPage;
