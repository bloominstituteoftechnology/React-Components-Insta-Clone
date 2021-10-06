import React, {useState } from 'react';
import Post from '../Posts/Post';
// import Posts from './components/Posts/Posts'
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => {
        return <Comments comment = {comment} />
      })}
    </div>
  );
};

export default Comments;
