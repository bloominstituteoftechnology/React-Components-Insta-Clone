//Complete the necessary code in this file
// import useState
import React, { useState }  from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "./dummy-data"

const PostsPage = () => {
  // set up state for your data
  const [ postData, setPostData ] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
{postData.map((post)=> <Post username={post.username}  thumbnailUrl={post.thumbnailUrl}  src={post.imageUrl} likes={post.likes}      postId={post.imageUrl}
comments={post.comments} /> )}      
    </div>
  );
};

export default PostsPage;
