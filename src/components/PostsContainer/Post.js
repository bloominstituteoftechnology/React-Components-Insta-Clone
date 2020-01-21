// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes

  const [likes, setLikes] = useState(
    props.postData.likes
    );

    const incrementLikes = () => {
      setLikes(likes => likes + 1)
    }

  return (
    <div className="post-border">
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={
          props.postData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.postData.imageUrl}
        />
      </div>
      <LikeSection 
      likes={likes}
      incrementLikes={incrementLikes}
      />
      <CommentSection
        postId={props.postData.imageUrl}
        comments={props.postData.comments}
      />
    </div>
  );
};

export default Post;