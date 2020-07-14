/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  return (
    <div className="App">
      <SearchBar />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
