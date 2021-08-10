import React from 'react';
import Post from './Post';
import './Posts.css';
//Define the Posts function, pass in props
const Posts = (props) => 
{
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  //Return function defined
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      
      { //Map over posts, extract the post info
        posts.map((postInfo) => 
        {
          //Return the post and like info
          return Post({post:postInfo, likePost:likePost});
        })
      }
    </div>
  );
};

//Export statement
export default Posts;
