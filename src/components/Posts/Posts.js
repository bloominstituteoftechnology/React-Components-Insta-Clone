import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts, likePost, showComments, submit, text, changeText } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(post => Post({ post, likePost, showComments, submit, text, changeText }))}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
