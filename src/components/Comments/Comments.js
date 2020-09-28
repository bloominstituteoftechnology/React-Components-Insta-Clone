import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* nedded index as a key to remove warning */}
      {console.log(comments)}
      {comments.map((commentData, index) => (
        <Comment comment={commentData} key={index} />
      ))}
      ;
    </div>
  );
};

export default Comments;
