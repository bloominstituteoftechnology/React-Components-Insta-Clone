import React from 'react';

const LikeSection = props => {
  console.log("debug1",props)
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={props.addLikes}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
      likes{props.newLikes}</p> 
</div>
  )
};

export default LikeSection;
