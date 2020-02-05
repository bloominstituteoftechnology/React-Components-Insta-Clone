//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import { dummyData } from "../dummy-data.js";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  const [ data, setDummyData ] = useState(dummyData);


  return (
    <div className="posts-container-wrapper">
      {/* map through data here */
        props.dummyData.map((dummyData, index) => {
          return 
        })
      }
    </div>
  );
};

export default PostsPage;

