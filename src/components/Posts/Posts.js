import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* nedded index as a key to remove warning */}
      {posts.map((post, index) => (
        <Post post={post} likePost={likePost} key={index} />
      ))}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
