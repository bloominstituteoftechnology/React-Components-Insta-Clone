import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, searchQuery } = props;
  return (
    <div className='posts-container-wrapper'>
      {posts.filter((post)=>post.username.startsWith(searchQuery)).map(val=><Post key={val.id} post={val} likePost={likePost} />)}
    </div>
  );
};

export default Posts;
