import React from 'react';
import Post from './Post';
import './Posts.css';


const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, key } = props;
  // console.log(posts);
  return (
    <div className='posts-container-wrapper'>
      
      {posts.map((post)=>(<Post post={post} likePost={likePost} key={key}/>))}
      {/* {posts.map((post)=> {return <Post post={post} likePost={likePost} key={post.id}/>})} */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
