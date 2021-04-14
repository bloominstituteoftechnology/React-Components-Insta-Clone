import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Custom = (props) => {

  const { id, submit, text, changeText } = props;

  return(
    <div className='comment-text'>
      <form>
        <input
          type='text'
          placeholder='Comment'
          onChange={changeText}
          // value={text}
        />
        <button type='button' onClick={() => submit(id)}>Comment</button>
      </form>
    </div>
  )
}

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, show, id, submit, text, changeText } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {
        comments.map(comment => {
          if (show) {
            return Comment({ comment });
          }
        })
      }
      {
         show ? Custom({ id, submit, text, changeText }) : null
      }
    </div>
  );
};

export default Comments;
