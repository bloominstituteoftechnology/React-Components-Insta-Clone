/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {

  return (
    <div className="App">
      <div className= "SearchBar"> 
         <SearchBar />
      </div>
      <div className ="PostsPage">
        <PostsPage />
        
      </div>
    </div>
  );
};

export default App;
