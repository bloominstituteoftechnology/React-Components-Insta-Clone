import './Posts.css';

import Post from './Post';
import React from 'react';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props; 

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => {
      return <Post key={post.id} likePost={likePost} post={post} />
      })}
    </div>
  );
};

export default Posts;