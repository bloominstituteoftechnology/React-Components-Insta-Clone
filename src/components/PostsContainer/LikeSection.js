import React, {useState} from 'react';

const LikeSection = props => {
  // const [changeColor, setChangeColor] = useState(true);
  


  console.log('likes props', props)
  return (
    <div>

    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" >

          <i className="far fa-heart" style={{color: props.fill}} onClick={props.likey} />

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
