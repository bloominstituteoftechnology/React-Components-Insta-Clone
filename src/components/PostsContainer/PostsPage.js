//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from '../CommentSection/CommentSectionContainer'
import data from '../../dummy-data';
// import data 

const PostsPage = () => {
  // set up state for your data
  console.log('data in PostsPage = ', data)
  return (
    <div className="posts-container-wrapper">
      { data.map(post => {
        console.log('post is: ', post)
        return (
          <div key={`${post.username}${Date.now()}`}>
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
