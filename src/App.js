/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// WE IMPORT THE SEARCHBAR AND POSTPAGE COMPONENTS FILES HERE
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from './dummy-data';

//THE APP COMPONENT THAT IMPORTS SEARCHBAR AND POSTPAGE COMPONENTS
const App = () => {
  ;
  return (
    <div className="App">
      {/* THIS IS THE SEARCHBAR COMPONENT */}
      <SearchBar />
      {/* THIS IS THE POSTPAGE COMPONENT AND IT PASSES THE DUMMYDATA WITH KEY DATA*/}
      <PostsPage data={dummyData} />
    </div>
  );
};
//Done
export default App;
