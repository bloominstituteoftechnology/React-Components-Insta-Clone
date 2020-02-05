//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  
  if (props.searchTerm === 0) {

    return (
      <div className="posts-container-wrapper">
        {props.data.map(post => {
          return <Post key={post.index} username={post.username} imageUrl={post.imageUrl} thumbnailUrl={post.thumbnailUrl} likes={post.likes} comments={post.comments} />
        })}
      </div>
    )
  } else {
    return (
      <div className="posts-container-wrapper">
        {props.search.map(post => {
          return <Post key={post.index} username={post.username} imageUrl={post.imageUrl} thumbnailUrl={post.thumbnailUrl} likes={post.likes} comments={post.comments} />
        })}
      </div>
    )
  };
}
export default PostsPage;