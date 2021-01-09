import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // ðŸ”¥ Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(object => {
        return (<Post key={object.id} likePost={likePost} post={object} />)
        {/* Check the implementation of Post to see what props it requires! */}
      })}
    </div>
  );
};

export default Posts;