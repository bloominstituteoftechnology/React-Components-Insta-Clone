import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(p => <Post id={p.id} post={p}/>)}
      {/* {posts.map(i => 
        <Post id={i.id} post={i} likePost = {likePost}/>)} */}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;

// import React from 'react';
// import Post from './Post';
// import './Posts.css';


// const Posts = (props) => {
//   // 🔥 Make sure the parent of Posts is passing the right props!
//   const { likePost, posts } = props;

//   return (
//     <div className='posts-container-wrapper'>
//       {posts.map(p => 
//          <Post id={p.id} post={p} />)}
//       {/* Map through the posts array returning a Post component at each iteration */}
//       {/* Check the implementation of Post to see what props it requires! */}
//     </div>
//   );
// };

// export default Posts;
