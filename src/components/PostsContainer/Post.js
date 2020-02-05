// You will add code in this file

import React, { useState } from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

import './Posts.css';

const Post = ({ post }) => {
  // console.log(post);
  // set up state for the likes
  const [postlikes, setPostLikes] = useState(post.likes);
  return (
    <div className='post-border'>
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={post.imageUrl} />
      </div>
      <LikeSection postlikes={postlikes} setPostLikes={setPostLikes} />
      <CommentSection postId={post.imageUrl} comments={post.comments} />
    </div>
  );
};

export default Post;
