//Complete the necessary code in this file
// import useState ✅
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummydata from "../../dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummydata)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      data.map(item => (
        <Post key = {item.username}  post = {item}/>
      ))}
    </div>
  );
};

export default PostsPage;

