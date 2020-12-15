import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);

  const likePost = postId => {
  
    setPosts(posts.map(element => {
      if(element.id === postId){
        element.likes = element.likes +1
      }
      return element;
    }))
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts posts={posts}  likePost={likePost}/>
    </div>
  );
};
export default App;
