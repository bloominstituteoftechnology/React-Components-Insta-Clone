// You will add code in this file
import React,{useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const {post} = props;
  const [postLikes,setPostLikes] = useState(post.likes)
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
      <LikeSection postLikes = {postLikes} setPostLikes = {setPostLikes}/>
      <CommentSection postId={post.imageUrl}  comments={post.comments} />
    </div>
  );
};
export default Post;


