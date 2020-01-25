//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import {dummyData} from '../../dummy-data'
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {

  return (
    <div className="posts-container-wrapper">
      <h1>Post page</h1>
      {/* map through data here */}
            {props.data.map(post=>(<Post post={post}/>))}

    </div>
  );
};

export default PostsPage;

