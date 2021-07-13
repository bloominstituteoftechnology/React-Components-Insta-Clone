/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.2 Instagram Clone- Comments.js
 * 7/13/2021
 **/

//Import statements
import React from 'react';
import Comment from './Comment';
import './Comments.css';

//Comments function definition, pass in props
const Comments = props => 
{
  // 🔥 Make sure the parent of Comments is passing the right props!

  //Destructure props
  const { comments } = props;

  //Return function definition, pass in jsx code
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      
      { //Map over comments
        comments.map(comment => 
        { 
          //Return and render the comment element
          return <Comment comment = {comment} key = {comment.id}/>
        }) 
      }
    </div>
  );
};

//Export statements
export default Comments;
