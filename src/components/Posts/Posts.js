import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, post } = props;
  console.log("post", post);
  // console.log('lik', likePost)
  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {post.map((post, index) => {
        return <Post key={index} post={post} likePost={likePost}/>
      })}
      {/* Check the implementation of Post to see what props it requires! */}

    </div>
  );
};

export default Posts;


