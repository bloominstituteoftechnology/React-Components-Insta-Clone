/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import dummydata from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import PostsPage from "./components/PostsContainer/PostsPage.js";


const App = () => {

  const [state, setState] = useState(dummydata);
  const [posts, setPosts] = useState(dummydata);
  const [searchText, setSearchText] = useState('');

  const searchPost = () => {
    const newState = state.filter(post => {
      return (post.username.toLowerCase() + post.comments[0].text.toLowerCase()).includes(searchText)
    })
    setPosts(newState)
  }

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar setSearchText={setSearchText} searchPost={searchPost} />
      <PostsPage dummydata={posts} />
    </div>
  );
};

export default App;
