import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import Posts from "./Posts";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  //console.log(props.post.likes); 400 and 4307
  //console.log(props.post.comments); all comments
  //console.log(post); all post info
  //console.log(post.id);  1 and 2
  //console.log(post.likes); 400 and 4307
  //console.log(numberOfLikes); undefined
  //console.log(likePost); log postID

  return (
    <div className="post-border">
      <PostHeader
        post={Posts}
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        numberOfLikes={props.post.likes}
        post={post}
        likePost={() => likePost(props.post.likes + 1)}
      />
      {/* Comments also wants its props! */}
      <Comments
        postId={props.post.id}
        comments={props.post.comments}
        onComment={props.onComment}
        onCommentEnter={props.onCommentEnter}
      />
    </div>
  );
};

export default Post;
