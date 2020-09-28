import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

// 🔥 Make sure the parent of Post is passing the right props!
//passing the props int this file to
const Post = (props) => {
  //seting up the state for likes
  const [likes, setLikes] = useState(props.post.likes);
  //checking my output
  console.log(props);

  const addLikes = () => {
    setLikes((likes) => likes + 1);
  };

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
      <LikeSection likes={likes} addLikes={addLikes} />
      {/* Comments also wants its props! */}
      <Comments
        postId={props.post.imageUrl}
        comments={props.post.comments}
        timeStamp={props.post.timestamp}
      />
    </div>
  );
};

export default Post;
