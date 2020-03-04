//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";


// import data 

const PostsPage = (props) => {
const [data, ammendData] = useState(dummyData)
  
  return (
    <div className="posts-container-wrapper">
    
    {data.map((elem,i) => {
        return <Post post = {elem} key = {i} />
      })}
    </div>
     )
}
  

export default PostsPage;

