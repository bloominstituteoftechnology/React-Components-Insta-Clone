import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(post =>{
        return <Post likePost={likePost} post={post} />
      })}
    </div>
  );
};
console.log('I am Posts.js')
export default Posts;
