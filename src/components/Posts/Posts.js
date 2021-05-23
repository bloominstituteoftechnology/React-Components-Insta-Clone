import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='Posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      
    posts.map(post = {
       
        
       <Posts posts={posts} likePost={likePost}/>
       
       
      
        }
       
      )
      
      
      
      
      </div>

  );
};

export default Posts;
//(post key={post.id}, post={post}, likePost={likePost}
//likepost={likePost}/>//