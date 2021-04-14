// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment as farComment, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment as fasComment, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes, liked, showComments, show } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={liked ? fasHeart : farHeart} color={liked ? '#FD1D1D' : null} onClick={likePost} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={show ? fasComment : farComment} color={show ? '#101010' : null} onClick={showComments}/>
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
