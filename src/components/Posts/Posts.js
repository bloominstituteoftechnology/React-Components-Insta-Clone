import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
	console.log(props);
	// 🔥 Make sure the parent of Posts is passing the right props!
	const { likePost, posts } = props;

	return (
		<div className='posts-container-wrapper'>
			<h1>Here are the posts!</h1>

			{/* Map through the posts array returning a Post component at each iteration */}
			{/* Check the implementation of Post to see what props it requires! */}
			{posts.map((post) => {
				return (
					<Post post={post} key={post.id} />
				);
			})}


		</div>
	);
};

export default Posts;
