//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import Posts from "./Post"
// import data 
import dummyData from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData)
  console.log(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        data.map( user => (<Post post = {user}/>))
      }
    </div>
  );
};

export default PostsPage;

