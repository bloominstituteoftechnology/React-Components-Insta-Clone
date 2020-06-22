// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const [likes, setLikes] = React.useState(props.post.likes)
  // props is philzcoffee || twitch object, not entire data
  const { username, thumbnailUrl, imageUrl, comments } = props.post;
  console.log("Post props: ", props);
  return (
    <div className="post-border">
      <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={imageUrl} />
      </div>
      <LikeSection likes={likes} setLikes={setLikes} />
      <CommentSection postId={imageUrl} comments={comments} />
    </div>
  );
};

export default Post;
