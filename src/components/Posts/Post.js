import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  // console.log("post: ", post) // passed
  // console.log(post); // post returns a single post if .mapped propertly in Posts.js

  return (
    <div className='post-border'>
      <PostHeader post={post}
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection numberOfLikes={post.likes} post={post}  likePost={() => likePost(post.id)} />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments}/>
    </div>
  );
};

export default Post;
