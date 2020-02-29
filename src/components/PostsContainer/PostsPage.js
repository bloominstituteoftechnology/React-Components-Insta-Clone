//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import DummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(DummyData);
  console.log(data);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(function(p, index) {
        // <Post key={index} post={p} />;
        return <Post key={index} post={p} />;
      })}
    </div>
  );
};

export default PostsPage;
