// look at the likes on this component. Right now it is hard coded on line 25.
// console.log your props and see what to use so this component will display the correct likes count.
// You will also need to add an onClick event handler that utilizes `likePost` to increase the likes count.
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {
  // Make sure the parent of LikeSection is passing the right props!
  const { likePost, likeCount } = props

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">100 likes</p>
    </div>
  )
};

export default LikeSection;
