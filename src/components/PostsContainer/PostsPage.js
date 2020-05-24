//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [dumData, setDumData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      dummyData.map((person, index) => (<Post key ={index} post={person}/>))
      }
    </div>
  );
};

export default PostsPage;
