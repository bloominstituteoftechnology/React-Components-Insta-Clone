import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const {posts, likePost} = props;
  console.log(posts);
  return (
    <div className='posts-container-wrapper'>
      {posts.map((e) => {
       return <Post post={e} likePost={likePost}/>
      })}
    </div>
  );
};

export default Posts;
