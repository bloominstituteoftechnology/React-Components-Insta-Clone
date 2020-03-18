//Complete the necessary code in this file
// import useState
import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';
// import data

const PostsPage = props => {
	// set up state for your data

	const [posts] = useState(dummyData);

	return (
		<div className="posts-container-wrapper">
			{/* map through data here to return a Post and pass data as props to Post */}
			{props.parentData.map(p => {
				console.log(p);
				// eslint-disable-next-line no-unused-expressions
				<Post key={p.imageUrl} dataFromParent={p} />;
			})}
		</div>
	);
};

export default PostsPage;
