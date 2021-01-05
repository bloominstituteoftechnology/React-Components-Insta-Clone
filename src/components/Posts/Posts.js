import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map( post => console.log ('here', post))}
      {posts.map( (post))=> 
      <Post post ={post} likePost={likePost}/>
  );
};

export default Posts;
