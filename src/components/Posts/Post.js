import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  console.log(props.post.likes);
  console.log(props.post.comments);
  
  
  return (
    <div className='post-border'>
      <PostHeader post={post}
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection numberOfLikes={props.post.likes} post={post} likePost={() => likePost(post.id)} />
      {/* Comments also wants its props! */}
      <Comments post={post}  comments={props.post.comments} />
    </div>
  );
};

export default Post;
