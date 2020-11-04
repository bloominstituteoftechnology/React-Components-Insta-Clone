import React from "react";
import * as uuid from "uuid";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map((post) => (
        <Post key={uuid.v4()} post={post} likePost={likePost} />
      ))}
    </div>
  );
};

export default Posts;