import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost,search } = props;

  const check = (search) => {
    if (search.length === 0) {
       return true;
    } else {
       if (post.username.search(search) >= 0) {
          return true;
       }
       for (let i of post.comments) {
          if (i.username.search(search) >= 0 || i.text.search(search) >= 0) {
             return true;
          }
       }
       return false;
    }
 };

 return (
  check(search) && (
     <div className="post-border">
        {/* {console.log(check(search))} */}
        <PostHeader
           username={post.username}
           thumbnailUrl={post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
           <img
              alt="post thumbnail"
              className="post-image"
              src={post.imageUrl}
           />
        </div>
        {/* Is LikeSection getting all the props it needs to work correctly? */}
        <LikeSection
           likePost={() => likePost(post.id)}
           numberOfLikes={post.likes}
           postID={post.id}
        />
        {/* Comments also wants its props! */}
        <Comments comments={post.comments} />
     </div>
  )
);
};

export default Post;

