// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import "./Posts.css"

const LikeSection = props => {
  const [setColor] = useState(document.getElementsByClassName('far fa-heart'))
  let heart = document.getElementsByClassName('far fa-heart')
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
      <i onMouseDown = {() => props.updateLikes(props.likes+1)} onMouseUp = {() => setColor(heart.classList.add('red'))} className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
    {props.likes} <strong>likes</strong>
    </p>
</div>
  )
};
export default LikeSection; 
