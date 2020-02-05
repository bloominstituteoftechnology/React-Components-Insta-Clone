/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/

import React, { useState } from 'react';
import './App.css';
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import dummydata
import dummydata from './dummy-data';

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState(dummydata);
  return (
    <div className='App'>
      {/* Add components here and pass props where appropriate */}
      <SearchBar />
      {/* <dummydata /> */}
      <PostsPage data={data} setData={setData} />
    </div>
  );
};

export default App;
