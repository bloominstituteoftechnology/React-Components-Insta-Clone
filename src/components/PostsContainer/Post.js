// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

// pass props in this file to
const Post = ({post}) => {
  // set up state for the likes



  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={
          post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <LikeSection
      
     

      />
      <CommentSection
        postId={post.imageUrl}
        comments={post.comments}
      />
    </div>
  );
};

export default Post;


