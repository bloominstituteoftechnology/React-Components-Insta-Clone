//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  // const [data, setData] = useState(dummyData); 
 console.log(dummyData)
  return (
    <div className="posts-container-wrapper">
      {dummyData.map(post => (
        <div> 
          <div className= "post-thumb-wrapper">
            <img src={post.thumbnailUrl} className= "post-thumb" />
          </div>         
          <h3 className = "post-header">{post.username}  </h3>      
          <img src={post.imageUrl} className= "post-image"/>
          <p className= "like-number">{post.likes} likes</p>
          
          <span>{post.timestamp}</span>
     


        </div>
      
      ))}

   {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

