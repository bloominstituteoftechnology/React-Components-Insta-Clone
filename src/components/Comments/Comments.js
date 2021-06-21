import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment f
      or every piece of data */}
      {comments.map(id => {
        return <Comment key={id.id} comment={id}/>
      })}
    </div>
  );
};

export default Comments;
