// You do not need to change this file.
import React from 'react';
import Comments from './Comments';

const Comment = props => {
  const { comment } = props;
  return (
    <div className='comment-text'>
      <span className='user'>{comment.username}</span>
      {Comments.map(comment => {
        return <comment  key={comment.id} comment={comment}/>
      })}
      <span className='comment'>{comment.text}</span>
    </div>
  );
};

export default Comment;
