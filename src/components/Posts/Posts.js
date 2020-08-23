import React from 'react';
import Post from './Post';
import './Posts.css';
import App, {posts} from "/Users/cassandravillarreal/Desktop/Lambda-Work/Unit2-pt20/React-Components-Insta-Clone/public/App"


const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      <Post key={posts.id}/>
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
