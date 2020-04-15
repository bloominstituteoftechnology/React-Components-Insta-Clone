// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
/*
Post is the child of PostsPage
{post} is the equivalent of props.post
props being the data passed down from Post
post being the property we assigned the value of the mapped data from dummyData
Now, we are accessing that data and assigning values to properties (username, thumbnail, alt, etc.)

PostsPage is being used to render Post
We can alter data inside of Post --> that is why our function 'addLikes' is housed here --> point of confusion: why can we alter data here (note: we can't permanently alter it --> refreshing page removes it.
If each refresh of our insta app removed all of the likes --> how do we cause these changes to be permanent?)

*/

// pass props in this file to
const Post = ({post}) => {
  // set up state for the likes
  let [likes, setLikes] = useState(post.likes)
  console.log(post);

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
      <LikeSection 
        addLikes={() => setLikes(likes + 1)}
        likes={likes}/>
      <CommentSection
        postId={post.imageUrl}
        comments={post.comments}
      />
    </div>
  );
};

export default Post;


