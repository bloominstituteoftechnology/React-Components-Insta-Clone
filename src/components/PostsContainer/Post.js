// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes

  const [likes, setLikes] = useState(props.datasData.likes);
  console.log(props);

  const liked = () => {

    setLikes(likes => likes + 1);

  };

  return (
    <div className="post-border">

      <PostHeader

        username = {props.datasData.username}
        thumbnailUrl = {props.datasData.thumbnailUrl}

      />

      <div className="post-image-wrapper">

        <img

          alt = "post thumbnail"
          className = "post-image"
          src = {props.datasData.imageUrl}

        />

      </div>

      <LikeSection

        likes = {likes}
        liked = {liked}

      />

      <CommentSection

        postId = {props.datasData.imageUrl}
        comments = {props.datasData.comments}
        timeStamp={props.datasData.timestamp}

      />

    </div>

  );
  
};


export default Post;
