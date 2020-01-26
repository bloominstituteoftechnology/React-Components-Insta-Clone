import React, {useState, useEffect} from 'react';

const LikeSection = props => {
    const [double, setDouble] = useState(false);
    const [buttonState, setButtonState] = useState(true)

  console.log('likes props', props)
  return (
    <div>

    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" >

          <i className="far fa-heart" disabled={double} onClick={props.likey} />
      
{/* <i className="far fa-heart" onClick={()=>{setButtonState(!buttonState)}} /> */}
{/* buttonState && (<i className="far fa-heart" onClick={()=>{setButtonState(!buttonState)}} /> */}

 {/* ) */}
        
        {/* <i className="far fa-heart" disabled={double} onClick={props.likey} /> */}
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
