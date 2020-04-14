// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
// const Post = props => {
export default function Post({ post }) {
  // set up state for the likes
  console.log(post);
  const [like, setLikes] = useState(post.likes);

  const incrementLikes = () => {
    setLikes(like => like + 1);
  };

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
        <LikeSection incrementLikes={incrementLikes} like={like} />
        
        <CommentSection
          postId={post.imageUrl}
          comments={post.comments}
        />
    </div>
  );
};

// export default Post;