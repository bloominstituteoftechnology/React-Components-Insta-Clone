/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
import Posts from './components/Posts/Posts.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data.js';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  const [searchTerm, setSearchTerm] = useState('')
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    setPosts(
      posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      } else {
        return post
      }
    }))
  };

  const filteredPosts = posts.filter(post => (
    post.username.toLowerCase().includes(searchTerm.toLowerCase())))

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <Posts posts = {filteredPosts} likePost = {likePost}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
