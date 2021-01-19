import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;
  return (
    <div className='posts-container-wrapper'>
      {posts.map(object => {
        return (<post key = {object.id} likePost = {object}/>)
      })}
    </div>
  );
};

export default Posts;
