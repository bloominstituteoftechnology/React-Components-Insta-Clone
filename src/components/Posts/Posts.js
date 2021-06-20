import React from 'react';
import Post from './Post';
import './Posts.css';

export const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, post } = props;

  return (
    <div className='posts-container-wrapper'>
      {props.posts.map(post => {
        return <Post key={post.id} post={post} likePost={likePost} post={post} numberOfLikes={post.likes}/>
      })
    }
  
      
    </div>
  );
};

// check props implementation
// export default Posts;
