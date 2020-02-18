// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes] = useState (props.likes);

console.log("Props on posts page ",props);
  return (
    <div className="post-border">
      <PostHeader
        username={props.username}
        thumbnailUrl={
          props.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.imageUrl}
        comments={props.comments}
      />
    </div>
  );
};

export default Post;


