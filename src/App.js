/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
// import the PostsPage and SearchBar and add them to the App
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";


const App = () => {


  return (
    <div className="App">
      <SearchBarContainer />
      <PostsPage/>
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;