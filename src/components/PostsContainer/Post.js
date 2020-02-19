// You will add code in this file
import React, {useState} from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import dummyData from "../../dummy-data";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes] = useState (dummyData);

console.log("Props on Post page ",props);
  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPostPage.username}
        thumbnailUrl={
          props.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPostPage.imageUrl}
        />
      </div>

      <LikeSection  />

      <CommentSectionContainer
        postId={props.propsPostPage.imageUrl}
        comments={props.propsPostPage.comments}
      />
    </div>
  );
};

export default Post;


