// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";


import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const {data} = props
  const [likes,setLikes] = useState(data.likes)
    const addLikes = () => {setLikes(likes + 1)}
    return (
      <div className="post-border">
        <PostHeader
          username={data.username}
          thumbnailUrl={
            data.thumbnailUrl
          }
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={data.imageUrl}
          />
        </div>
        <LikeSection likes = {likes} addLikes = {addLikes} />
        <CommentSection
          postId={data.imageUrl}
          comments={data.comments}
        />
      </div>
    );
  }

  


export default Post;
