// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = props => {
  console.log('props in postheader: ', props)
  const {thumbnailUrl, username} = props;
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={thumbnailUrl}
        />
      </div>
      <h2>{username}</h2>
    </div>
  );
};

export default PostHeader;
