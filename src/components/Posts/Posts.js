import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  posts.map((post) =>{
    return (
      <div className='posts-container-wrapper'>
        <Post key ={post.id}likePost={likePost}   post={posts} />
        {/* Map through the posts array returning a Post component at each iteration */}
        {/* Check the implementation of Post to see what props it requires! */}
      </div>
  )});
};

export default Posts;

