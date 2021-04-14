import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-border'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      <PostHeader
      usernamername = {post.username}
      thumbnailUrl = {post.thumbnailUrl}
      />
      <img 
      alt = 'post thumbnail'
      className = 'post-image'
      src = {post.imageURL}
      />
    </div>
  );
};

export default Posts;
