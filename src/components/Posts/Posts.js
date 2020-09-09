import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // const { likePost, posts } = props;
  console.log("Posts.js props", props)

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {    
        props.posts.map((post, index) => (
          <Post key={"Posts-Map-" + index} post={post} likePost={props.likePost} />
        ))}
      {/* Check the implementation of Post to see what props it requires! */}
    
      
    </div>

  );
};

export default Posts;
