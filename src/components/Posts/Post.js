import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { postData, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={postData.username}
        thumbnailUrl={postData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={postData.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(postData.id)} numberOfLikes={postData.likes} />
      {/* Comments also wants its props! */}
      <Comments comments={postData.comments}/>
    </div>
  );
};

export default Post;
