//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [total, setTotal] = useState(0);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map(user => {
        return <Post post={user} />;
      })}
    </div>
  );
};

export default PostsPage;
