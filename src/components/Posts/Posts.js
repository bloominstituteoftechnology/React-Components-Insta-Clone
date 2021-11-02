import React from 'react';
import Post from './Post.js';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(props);
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map(post =>
        <Post post={post} likePost={likePost} key={post.id}/>)}
    </div>
  );
};

export default Posts;
