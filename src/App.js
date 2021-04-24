import React, { useState } from 'react';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import data from './dummy-data'

import './App.css';

const App = () => {
  
  const [posts, setPosts] = useState(data)

  const likePost = postId => {
    setPosts(posts.map((post) => {
      return (post.id === postId) ? {...post, likes: post.likes + 1} :  post
    }))
  };

  return (
    <div className='App'>

      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
