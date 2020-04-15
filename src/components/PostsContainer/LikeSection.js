// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
const LikeSection = props => {
  let [likes, setLikes] = useState(props.likes);
  const handleClick = () => {
    setLikes(likes + 1 )
  }
  console.log(likes)
 


  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart"  onClick={handleClick}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment"/>
      </div>
    </div>
    <p className="like-number">
      
     {likes} likes</p>
</div>
  )
};

export default LikeSection;
