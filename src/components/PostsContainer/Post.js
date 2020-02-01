// You will add code in this file

import React, { useState, useEffect } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [ liked, setLiked ] = useState(false);

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
      <LikeSection id={props.post.id} liked={liked} setLiked={setLiked} addLike={props.addLike} likes={props.post.likes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        addComment={props.addComment}
        id={props.post.id}
      />
    </div>
  );
};

export default Post;
