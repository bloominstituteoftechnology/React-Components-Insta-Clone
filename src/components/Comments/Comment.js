// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  // const { comment } = props.data;

  return (
    <div className='comment-text'>
      <span className='user'>{props.data.username}</span>
      {' '}
      <span className='comment'>{props.data.text}</span>
    </div>
  );
};


export default Comment;
