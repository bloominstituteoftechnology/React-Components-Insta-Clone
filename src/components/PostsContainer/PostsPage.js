//Complete the necessary code in this file
// import useState
import { useState } from "react";
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data";

const PostsPage = () => {
  const [data, setData] = useState(dummydata);
  console.log(data)
  return (
    <div className="posts-container-wrapper">
      {data.map(p => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;
