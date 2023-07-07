import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map( val => {
        console.log(val);
        return <Post id={val.id} username={val.username} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};
//aa
export default Posts;
