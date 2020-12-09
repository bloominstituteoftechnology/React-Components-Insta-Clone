import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;


  // console.log(posts[0].username);

  // console.log(posts);
  
  // console.log(likePost);

  // console.log(posts.map( (post) => {

  //     const username = post.username
  //     const thumbnailUrl = post.thumbnailUrl
  //     const imageUrl = post.imageUrl

  //     console.log('Test 1');
  //     console.log( username ); 
  //     console.log('Test 2');
  //     console.log( thumbnailUrl ); 
  //     console.log('Test 3');
  //     console.log( imageUrl ); 

  //     return post

  //   })
  // );

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}

      

      {posts.map(( post ) => (

        
        // return <Post username={post.username} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} id={post.id} />

      ))}
      
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
