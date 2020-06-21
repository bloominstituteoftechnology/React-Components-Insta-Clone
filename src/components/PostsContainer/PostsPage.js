//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postsData, setPostsData] = React.useState(null);
  const [commentSectionData, setCommentSectionData] = React.useState(null)

  return (
    <div className="posts-container-wrapper">
      { data.map(post => {
        return (
          <div><Post 
            postsData={postsData} 
            setPostsData={setPostsData} 
          />
          <CommentSection 
              commentSectionData={commentSectionData} 
              setCommentSectionData={setCommentSectionData} 
          />
          </div>
        )
      }
      )
    }
    </div>
  );
};

export default PostsPage;
