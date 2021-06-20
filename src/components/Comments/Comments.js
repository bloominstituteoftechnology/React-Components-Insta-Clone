import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  
  const { comments } = props;

  return (
    <div>
    {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} username={comment.username} text={comment.text}/> 
     })
    }
    
    </div>
  );
};

export default Comments;
