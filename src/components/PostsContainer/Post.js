import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  const [likes, setLikes] = useState(
    props.dataFromParent.likes
  );

  const incrementLike = () => {
    setLikes(likes => likes + 1);
  };
  return (
    <div className="post-border">
      <PostHeader
        username={
          props.dataFromParent.username
        }
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
      </div>
      <LikeSection
        incrementLike={incrementLike}
        likes={likes}
      />
      <CommentSection
        postId={
          props.dataFromParent.imageUrl
        }
        comments={
          props.dataFromParent.comments
        }
      />
    </div>
  );
};

export default Post;
