import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
	// 🔥 Make sure the parent of Posts is passing the right props!
	const { likePost, posts } = props.data;
	console.log('props', props.data);

	return (
		<div className="posts-container-wrapper">
			{/* Map through the posts array returning a Post component at each iteration */}
			{props.data.map((content, index) => {
				return <Post key={index} content={content} likePost={props.likePost} />;
			})}
			{/* Check the implementation of Post to see what props it requires! */
			/* It needed a key! :) */}
		</div>
	);
};

export default Posts;
