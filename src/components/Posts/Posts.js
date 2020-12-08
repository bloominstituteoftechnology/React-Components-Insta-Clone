import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(postObject => {
        return (
          <Post 
          key = {postObject.id}
          likePost = {likePost}
          post = {postObject}
          numberOfLikes = {postObject.likes}
          comments = {postObject.comments}
          />
        )
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
