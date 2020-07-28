import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */
      
      posts.map((post) => <Post key={post.id} post={post} likePost={post.likePost} />) 
      }
      {/* Check the implementation of Post to see what props it requires! */
      // < Post username={props.username} thumbnailUrl = {props.thumbnailUrl} imageUrl = {props.imgUrl}/>
      }
    </div>
  );
};

export default Posts;
