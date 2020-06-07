// You will add code in this file
import React, { useState } from "react";
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentSection from "../CommentSection/CommentSectionContainer";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLike] = useState(props.post.likes);

  const handleLikes = () => {
    setLike(likes + 1);
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        likes={likes}
        setlike={handleLikes}
      />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;