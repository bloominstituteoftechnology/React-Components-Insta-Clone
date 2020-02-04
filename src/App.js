/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/

import React, { useState } from "react";
import "./App.css";
import PostsPage from "./PostsContainer/PostsPage.js";
import SearchBar from "./SearchBar/SearchBarContainer.js";
import dummyData from "./dummy-data.js";



// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  const [dummyData, setDummyData] = useState(PostsPage);
  console.log("PostsPage", PostsHeader);
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */
      
      }
    </div>
  );
};

export default App;
