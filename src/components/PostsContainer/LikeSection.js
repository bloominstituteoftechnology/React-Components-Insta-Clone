import React, { useState } from 'react';

const LikeSection = props => {
  const likePost = (id) => {
    if (!props.liked) {
      props.addLike(id, props.likes + 1)
      props.setLiked(true)
    } else {
      props.addLike(id, props.likes - 1)
      props.setLiked(false)
    }

  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div
          className="like-section-wrapper"
          onClick={() => likePost(props.id)}
        >
          {props.liked ? <i className="fas fa-heart" style={{ color: 'red '}} /> : <i className="far fa-heart" />}
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
