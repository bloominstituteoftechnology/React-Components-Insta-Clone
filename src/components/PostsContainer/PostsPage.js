//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = () => {
  const [posts, setPosts] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {posts.map(post => {
        return(
          <Post post={post} />
        )
      })}
    </div>
  );
};

export default PostsPage;
