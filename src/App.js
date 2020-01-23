/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
// import the PostsPage and SearchBar and add them to the App
import PostsContainer from "./components/PostsContainer/PostsPage";
import searchBar from "./components/SearchBar/SearchBarContainer";
// import dummydata
import dummydata from "./dummy-data";

const App = () => {
  const [data, setData] = useState(dummydata);
  // set up stae for the dummy data and pass to your PostsPage
  const [Data] = useState(dummydata);
  return (
    <div className="App">
    <SearchBar />
      <PostsPage data={data} />
    </div>
  );
};

export default App;
