import React, {useRef} from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, newComment, postId } = props;
  const username = useRef()
  const text = useRef()
  const handlesubmit = (e) => {
    e.preventDefault();
    newComment(username.current.value, text.current.value, postId);
    username.current.value = "";
    text.current.value = "";
  }
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(c => {
      return <Comment comment= {c}/>
      })}
      <form  className="content-form" onSubmit={e=>handlesubmit(e)}> 
        <input type="text" ref={username} placeholder="username"/>
        <input type="text" ref={text} placeholder="comment"/>
        <input type="submit" hidden/>
      </form>
    </div>
  );
};

export default Comments;
