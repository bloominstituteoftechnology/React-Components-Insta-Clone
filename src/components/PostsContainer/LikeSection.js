import React, {useState, useEffect} from 'react';

const LikeSection = props => {
    const [double, setDouble] = useState(false);

  console.log('likes props', props)
  return (
    <div>

    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" >
        <i className="far fa-heart" disabled={double} /*onClick={props.likey}*/ onClick={props.likey} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.addLikes} likes</p>
</div>
  )
};

export default LikeSection;
