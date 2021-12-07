// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";
const LikeSection = (props) => {
  const { likePost, numberOfLikes } = props;
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  // console.log(props);
  // const [numLikes, setNumLikes] = useState(likePost);
  // console.log(setNumLikes);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => likePost(numberOfLikes)}
          />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{numberOfLikes}</p>
    </div>
  );
};

export default LikeSection;
