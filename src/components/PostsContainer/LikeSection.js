import React, { useState } from 'react';

const LikeSection = props => {

  const likeNumber = props.likes;
  const [countLikes, setCountLikes] = useState(likeNumber);
  const onClickLike = () => setCountLikes(countLikes + 1);

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={onClickLike} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likes} likes</p>
</div>
  )
};

export default LikeSection;
