//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from '../CommentSection/CommentSectionContainer'
import DummyData from '../../dummy-data';
// import data 

const PostsPage = () => {
  // set up state for your data
  const data = DummyData;
  console.log('data in PostsPage = ', data)
  return (
    <div className="posts-container-wrapper">
      { data.map(post => {
        return (
          <div>
            <Post post={post} />
          </div>
        )
      }
      )
    }
    </div>
  );
};

export default PostsPage;
