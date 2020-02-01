import React, { useState } from 'react';

const CommentInput = props => {
  const [ newComment, setNewComment ] = useState("")
  const onEnterKeyDown = (e) => {
    e.preventDefault()
    const comment = {
      username: "th0mmy_g",
      text: newComment
    }
    props.addComment(props.id, comment)
    props.setComments([...props.comments, comment])
  }
  return (
    <form className="comment-form">
      <input
        type="text"
        placeholder="Add comment... "
        onChange={e => setNewComment(e.target.value)}
        onKeyDown={(e) => {e.key === 'Enter' && onEnterKeyDown(e)}}
      />
    </form>
  );
};

export default CommentInput;
