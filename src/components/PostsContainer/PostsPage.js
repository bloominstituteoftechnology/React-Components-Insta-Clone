//Complete the necessary code in this file
// import useState
import React, {useState, useEffect} from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSectionContainer";
import "./Posts.css";
import dummyData from "../../dummy-data";

// import data 

const PostsPage = () => {
  // set up state for your data

  const [posts, setPosts] = useState(dummyData);

  // useEffect(() => {
  //   dummyData.map(post => setPosts([post]));
  // }, []);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
 
 {posts.map((post, index) => {

    return (

 

<Post key={index} post={post}/>

 

    
)})
}   
</div>
);
};


export default PostsPage;

