/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearch] = useState('');

  const likePost = postId => {
    const newPost = posts.map(post => {
        if(post.id === postId){
          return {...posts, likes: post.likes + 1}
        }
        else{
          return posts
        }
    });
    setPosts(newPost)
  };

  return (
    <div className='App'>
      {<SearchBar/>}
      {<Posts posts={posts} likePost={likePost} />}
    </div>
  );
};

export default App;
