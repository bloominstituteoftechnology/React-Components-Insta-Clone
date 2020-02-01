import React, { useState } from "react";

const LikeSection = props => {
  console.log(props.likes);

  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    if (!clicked) {
      props.setLikes(props.likes + 1);
      setClicked(!clicked);
    } else {
      props.setLikes(props.likes - 1);
      setClicked(!clicked);
    }
  };
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className={`far fa-heart ${clicked ? "liked" : ""}`}
            onClick={onClickHandler}
            // className={clicked ? "liked" : ""}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{`${props.likes} `} likes</p>
    </div>
  );
};

export default LikeSection;
