//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = () => {
	// set up state for your data
	return (
		<div className="posts-container-wrapper">
			{dummyData.map((post, index) => (
				<Post key={index} post={post} /> ))
			};
		</div>
	);
};

export default PostsPage;

