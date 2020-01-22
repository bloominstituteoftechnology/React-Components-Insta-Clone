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
import dummyData from "./dummy-data";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  let [data] = useState(dummyData)
  console.log(data);
  return (
    <div className="App">
      <h1>h1 App</h1>
      <SearchBar />
      <PostsPage postData = {data}/>
      {/* Add components here  and pass props where appropriate */}
    </div>
  );
};

export default App;
