import React from 'react';
import './Comment.css';

const Comment = props => {
  // console.log(props);
  return (
    <div className='comment-text'>
      <span className='user'>{props.username}: </span>{' '}
      <span className='comment'>{props.text} </span>
    </div>
  );
};
export default Comment;
