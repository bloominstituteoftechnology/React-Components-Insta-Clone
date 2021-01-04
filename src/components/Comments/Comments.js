import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  const inputRef = React.useRef(null);

  function handleKeyDown(event) {
    switch (event.key) {
      case "Enter":
        props.onCommentEnter(props.postId);
        inputRef.current.value = '';
        break;

      default:
        break;
    }
  }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment, index) => {
        return <Comment class="comment" key={`${index}_${comment.id}`} comment={comment} />;
      })}
      <input
        type="text"
        ref={inputRef}
        onChange={(event) => props.onComment(event, props.postId)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Comments;
