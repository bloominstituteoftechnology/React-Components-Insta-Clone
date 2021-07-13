/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.2 Instagram Clone- Post.js
 * 7/13/2021
 **/

//Import statements
import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

//Post function definition, pass in props
const Post = props => 
{
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;

  //Return function
  return (
    <div className='post-border'>
      <PostHeader
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
      {/* Is LikeSection getting all the props it needs to work correctly? 
        * Added numberOfLikes = {post.likes}*/}
      <LikeSection likePost= {() => likePost(post.id)} numberOfLikes = {post.likes} />

      {/* Comments also wants its props!
        * Added the props to render comments */}
      <Comments comments = {post.comments}/>
    </div>
  );
};

export default Post;
