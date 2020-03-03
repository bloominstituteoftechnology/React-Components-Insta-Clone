// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = props => {
  const [count, setCount] = setCount(0);
  const addLike = () => setCount(count + 1);

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="like-number"
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeSection;
