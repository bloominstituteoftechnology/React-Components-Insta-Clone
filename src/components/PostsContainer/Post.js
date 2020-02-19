// You will add code in this file
import React, {useState} from "react";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";


// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState (props.post.likes);
  
function addLikes(){
 setLikes( likes =>  likes + 1)
 
}
console.log("Props on Post page ",props.post.likes);
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

      <LikeSection likes={likes} addLikes={addLikes} />

     {/* <CommentSectionContainer
        postId={props.post.imageUrl}
        comments={props.post.comments}
      /> */}
    </div>
  );
};

export default Post;


