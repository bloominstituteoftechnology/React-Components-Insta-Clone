// Look at the number of likes on line 25. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          ❤️
        </div>
        <div className='like-section-wrapper'>
          💬
        </div>
      </div>
      <p className='like-number'>100 likes</p>
    </div>
  );
};

export default LikeSection;
