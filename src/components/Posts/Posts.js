import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="500"
        height="600"
        src="https://react-ts-memory.vercel.app/"
      ></iframe>
    </div>
  );
};

export default Posts;
