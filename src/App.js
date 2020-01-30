/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import dummyData from './dummy-data';
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';


const App = () => {

  const [ state, setState ] = useState(dummyData)
  const [ posts, setPosts ] = useState(dummyData);
  const [ searchTerms, setSearchTerms ] = useState("");

  const searchPost = () => {
    const newState = state.filter(post => {
      return (post.username.toLowerCase() + post.comments[0].text.toLowerCase()).includes(searchTerms)
    })
    setPosts(newState)
  }

  console.log(searchTerms)

  
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      <SearchBar setSearchTerms={setSearchTerms} searchPost={searchPost} />
      <PostsPage dummyData={posts} />
    </div>
  );
};

export default App;
