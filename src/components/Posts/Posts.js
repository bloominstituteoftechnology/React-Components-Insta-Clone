import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map(post => {
          return <Post key={post.id} username={post.username} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} likes={post.likes} comments={post.comments}/>
        })
      }
    </div>
  );
};

export default Posts;
