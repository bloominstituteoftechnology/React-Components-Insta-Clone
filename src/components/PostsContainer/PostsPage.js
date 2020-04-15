//Complete the necessary code in this file
// import useState
import React, { useState }  from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "./dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [ postData, setPostData ] = useState("");
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
{dummyData.map((post)=> <Post username={post[0].username}  thumbnailUrl={post[0].thumbnailUrl}  src={post[0].imageUrl} likes={post[0].likes}      postId={post[0].imageUrl}
comments={post[0].comments} /> )}      
    </div>
  );
};

export default PostsPage;
