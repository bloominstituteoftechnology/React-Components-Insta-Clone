import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts, likePost} = props;
  // console.log(posts,"hello")
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(p => {
        return <Post post={p} numberOfLikes={p.likes} likePost={() => likePost(p.id)} key={p.id} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
