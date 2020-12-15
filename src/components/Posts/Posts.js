import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;
  const content = props.posts.map( (element) =>
    <Post post = {element} key={element.id} likePost={props.likePost}/>
  )

  return (
    <div className='posts-container-wrapper'>
      {content}
    </div>
  );
};

export default Posts;
