//??? How do I know which imports i need???
import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  // ??? how do i know these are the right props ???
  const { post, likePost } = props;

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
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      {/* ??? can we go over this again - added numberOfLikes??? */}
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes={post.likes}/>
      {/* Comments also wants its props! */}
      {/* ??? can we go over this again ??? */}
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
// nothing's changed, how do I know if I did it correctly
