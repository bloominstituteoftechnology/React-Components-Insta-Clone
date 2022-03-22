import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  
  return (
    <div className='posts-container-wrapper'>
      {posts.map(returnPosts => {
        return <Post post={returnPosts} key={returnPosts.id} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
