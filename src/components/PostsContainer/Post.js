// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.dataFromParent.likes);

  //function increments likes when invoked
  const incrementLike = (likes) => {
    setLikes(likes => likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.dataFromParent.username}
        thumbnailUrl={
          props.dataFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.dataFromParent.imageUrl}
        />
        <LikeSection
        incrementLike={incrementLike}
        likes={likes}
        />
      </div>
      
      <CommentSection
        postId={props.dataFromParent.imageUrl}
        comments={props.dataFromParent.comments}
      />
    </div>
  );
};

export default Post;
