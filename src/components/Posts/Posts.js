import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, numberOfLikes } = props;
  //console.log(posts); all posts
  //console.log(likePost); logs postId => {
  //console.log(numberOfLikes); undefined

  //console.log(posts)
  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

      {posts.map((postObject) => {
        return (
          <Post
            key={postObject.id}
            likePost={likePost}
            post={postObject}
            numberOfLikes={numberOfLikes}
            onComment={props.onComment}
            onCommentEnter={props.onCommentEnter}
          />
        );
      })}
    </div>
  );
};

export default Posts;

