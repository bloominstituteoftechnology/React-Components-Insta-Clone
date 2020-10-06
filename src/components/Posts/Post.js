import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { likes, setLikes } = useState(props.post.likes)

  const moreLikes = () => {
    setLikes((likes) => likes + 1);
  }


  return (
    <div className='post-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likes ={likes} moreLikes ={moreLikes} />
      {/* Comments also wants its props! */}
      <Comments
        postId={props.post.imageUrl}
        comments={props.post.comments}
        timeStamp = {props.post.timeStamp}
      />
    </div>
  );
};

export default Post;
