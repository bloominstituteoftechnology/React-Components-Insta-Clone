import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => <Post key={post.id} post={post} likePost={likePost} />)}
    </div>
  );
};

export default Posts;
