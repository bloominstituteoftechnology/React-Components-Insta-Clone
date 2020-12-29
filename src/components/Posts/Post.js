import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost, changeInput, addComment } = props;
  console.log(post, likePost, changeInput, addComment);
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
      <LikeSection numberOfLikes={Posts.likes} post={post} likePost={() => likePost(post.id)} />
      {/* Comments also wants its props! */}
      <Comments post={post}  comments={Posts.comments} changeInput={changeInput} addComment={addComment}/>
    </div>
  );
};

export default Post;
