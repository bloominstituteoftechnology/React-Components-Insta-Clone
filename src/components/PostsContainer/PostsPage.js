//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState(dummydata);
 
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {postData.map(data => (
        <Post key={data.username} post={data} />
      ))}

    </div>
  );
};

export default PostsPage;

