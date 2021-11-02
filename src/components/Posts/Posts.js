import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, onChangeHandler, addComment } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map(post => <Post likePost={likePost} post = {post} key = {post.id} onChangeHandler={onChangeHandler} addComment = {addComment}/>)
      }
    </div>
  );
};

export default Posts;
