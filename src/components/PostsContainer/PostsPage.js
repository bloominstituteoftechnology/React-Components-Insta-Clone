//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = ({ posts, addLike, addComment, userInfo }) => {
  return (
    <div className="posts-container-wrapper">
      {posts.map((post, i) => {
        return <Post key={i} post={post} addLike={addLike} addComment={addComment} userInfo={userInfo} />
      })}
    </div>
  );
};

export default PostsPage;

