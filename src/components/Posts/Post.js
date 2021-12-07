import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  // console.log(likePost);
  const like = () => {
    return likePost(post.id);
  };
  return (
    <div className="post-border">
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        // likePost={() => likePost(post.id)}
        //works ^^
        // likePost={function () {
        //   return likePost(post.id);
        // }}
        // works ^^
        likePost={like}
        //works ^^
        //why does likePost={likePost(post.id)} not work?
        //I get that it's not a function
        numberOfLikes={post.likes}
      />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
