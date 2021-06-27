// You do not need to change this file.
import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment } = props;

  return (
    <div>
      {
        Comments.map(id => {
          return <Comment comment={id} key={id.id}/>
        })
      }
    </div>
  );
};


export default Comment;
