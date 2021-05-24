import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => <Post post={post} likePost={likePost} key={index} />)}
    </div>
  );
};

export default Posts;
