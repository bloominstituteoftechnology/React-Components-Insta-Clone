// look at the likes on this component. Right now it is hard coded on line 20. 
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
import React from 'react';

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">likes</p>
</div>
  )
};

export default LikeSection;
