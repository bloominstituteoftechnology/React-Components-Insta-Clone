import React from 'react';

const LikeSection = props => {
  const likePost = () => {
    if (!props.liked) {
      props.setLikes(props.likes + 1)
      props.setLiked(true)
    } else {
      props.setLikes(props.likes - 1)
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
          onClick={() => likePost()}
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
