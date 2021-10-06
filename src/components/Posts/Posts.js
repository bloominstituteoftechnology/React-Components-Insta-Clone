import React, {useState} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  const {post, setPost} = useState(posts.id);
  
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {}
      {posts.map(() => <div>{post}</div>)}
      {/* Check the implementation of Post to see what props it requires! */}
      <Posts posts={posts} likePost={likePost} />
      <Post post={post} likePost={likePost}/>
    </div>
  );
};

export default Posts;
