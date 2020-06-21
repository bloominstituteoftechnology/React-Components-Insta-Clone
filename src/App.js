/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import SearchBar from './components/SearchBar/SearchBarContainer'
import PostsPage from './components/PostsContainer/PostsPage';


const App = () => {
  const [searchBarData, setSearchBarData] = React.useState(null);
  const [postsData, setPostsData] = React.useState(null);
  
  return (
    <div className="App">
      <SearchBar searchBarData={searchBarData} setSearchBarData={searchBarData} />
      <PostsPage postsData={postsData} setPostsData={setPostsData} />      
    </div>
  );
};

export default App;
