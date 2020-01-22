//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.parentData.map(el => (
        <Post
        key = {el.imageUrl}
        post={el}
      />
      ))}
    </div>
  );
};

export default PostsPage;

// const PostsPage = props => {
//   console.log("the props", props);
//   return (
//     <div className="posts-container-wrapper">
//       {props.parentData.map(p => (
//         <Post
//           key={p.imageUrl}
//           dataFromParent={p}
//         />
//       ))}
//     </div>
//   );
// };