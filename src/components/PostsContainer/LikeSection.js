// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";

/*
This is the end of part of the familial tree for PostsPage
All of our data from Post is passed here, it tells Post what to do with it, Post passes that back up to PostsPage
*/

//pass in clickEvent() function with likes, it is from the Post.js component
const LikeSection = ({likes, addLikes}) => {
  
  return (
    <div>
        <div
        className="like-section"
        key="likes-icons-container"
        >
        <div className="like-section-wrapper">
            <i className="far fa-heart" onClick={addLikes}/>
        </div>
        <div className="like-section-wrapper">
            <i className="far fa-comment" />
        </div>
        </div>
        <p className="like-number">
        {likes} likes</p>
    </div>
  )
};

export default LikeSection;
