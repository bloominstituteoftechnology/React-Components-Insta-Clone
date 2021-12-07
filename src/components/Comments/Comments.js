import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const comments = props.comment;
  console.log(props);
  console.log(comments);
  return (
    <div>
      {comments.map(e =>{
        return <Comment comment={e}/>
      })}; 
    </div>
)};

export default Comments;