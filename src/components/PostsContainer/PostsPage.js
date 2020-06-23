//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data.js'
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        data.map(p => {
          return(
          <Post key = {p.id} post = {p} /> 
        )
          })}
    </div>
  );
};

export default PostsPage;
