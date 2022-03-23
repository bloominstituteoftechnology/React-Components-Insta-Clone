import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
    console.log(props)
    const { posts, likePost } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map(post => {
        console.log(post)
        return <Post post={post} likePost={likePost} key={post.id} />
      })}
    </div>
  );
};

export default Posts;
