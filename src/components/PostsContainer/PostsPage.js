//Complete the necessary code in this file
// import useState
import React,{useState} from "react";
import Post from "./Post";
import "./Posts.css";
import PostData from "../../dummy-data"

const PostsPage = () => {
const [data] = useState(PostData)
  return (
    <div className="posts-container-wrapper">
      {data.map(d=>{
        return <div>
          <Post post={d}/>
        </div>
      })}
    </div>
  );
};

export default PostsPage;

