// You will add code in this file

import React, {useState, useEffect} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes

  const [addLikes, setAddLikes]=useState(props.post.likes);
  const [buttonState, setButtonState] = useState(false);
  const [click, setClick] = useState(true);
  


  const likey= ()=>{
    // setAddLikes(addLikes + 1);
    // setButtonState(!buttonState)

    if (click){
      setAddLikes(addLikes + 1);
      setClick(false)
  }
 else if (click === false) {
  setAddLikes(addLikes - 1);
  setClick(true)
  }

  }

  const remove = () =>{
    setAddLikes(addLikes - 1);
  }


  {console.log('props', props.post.likes)}
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection addLikes={addLikes} click ={click} likey={likey} buttonState ={buttonState} setButtonState={setButtonState} /*disabled={double}*//>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        
      />
    </div>
  );
};

export default Post;
