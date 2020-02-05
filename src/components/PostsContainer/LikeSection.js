import React from 'react';

const LikeSection = ({ postlikes, setPostLikes }) => {
  // console.log(postlikes);
  return (
    <div>
      <div className='like-section' key='likes-icons-container'>
        <div className='like-section-wrapper'>
          <i
            className='far fa-heart'
            onClick={() => setPostLikes(postlikes + 1)}
          />
        </div>
        <div className='like-section-wrapper'>
          <i className='far fa-comment' />
        </div>
      </div>
      <p className='like-number'>{postlikes} likes</p>
    </div>
  );
};

export default LikeSection;
