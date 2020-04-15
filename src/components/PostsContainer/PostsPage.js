//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';
/*PostsPage is the parent component (App is parent to it, but not passing anything) --> App is there to render the PostsPage
We import the data here, and pass it to PostsPage's descendents
We pass data inside dummyData down to post as an array of objects <-- ?
*/


const PostsPage = () => {
  // set up state for your data
  const [postData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
        {/* map through data here to return a Post and pass data as props to Post */}
            {postData.map(p => (
                <Post post={p}/>
            ))}
    </div>
  );
};

export default PostsPage;

