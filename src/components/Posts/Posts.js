import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(post => ( 
        <Post post = {post} likePost = {likePost} key = {post.id} /> 
      ))}
      {/*now sending from Posts into Post, each {post} of the {posts} array as post, and {likePost} as likePost*/}
      {/*ask in JSX can you use map without an expression (const x = y.map)? What is this doing, using Post on the array to render?, why the map instead of for? */}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
