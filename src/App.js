/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
import dummyData from './dummy-data';
// import the PostsPage and SearchBar and add them to the App

const App = () => {
	const [posts] = useState(dummyData);

	return (
		<>
			{/* Add imported components here to render them */}
			<div className="App">
				<SearchBar />
				<PostsPage parentData={posts} />
			</div>
		</>
	);
};

export default App;
