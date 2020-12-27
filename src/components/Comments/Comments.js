import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, changeInput, addComment, post } = props;
  // console.log("comments", comments); // passed

  const ENTER_KEY_CODE = 13; // global const that defines key code 13 "Enter Key"
 
  const handleKeyUp = evt => {
      if (evt.keyCode === ENTER_KEY_CODE) {
          console.log("got an enter")
          addComment(post.id);
      }
  }  // helper function to handle key up, triggers adding a comment

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {
        return <Comment class="comment" key={comment.id} comment={comment} />
      })}
      {<input class="input-form" type="text" placeholder=" Add a comment ... " onKeyUp={handleKeyUp} onChange={changeInput} />}
      
    </div>
  );
};

export default Comments;

