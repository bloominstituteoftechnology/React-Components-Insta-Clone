/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState, useEffect } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
// import dummydata
import dummyData from './dummy-data';
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';


const App = () => {

  const [ state, setState ] = useState(dummyData)
  const [ posts, setPosts ] = useState(state);
  const [ searchTerms, setSearchTerms ] = useState("");

  const searchPost = () => {
    const newState = state.filter(post => {
      return (post.username.toLowerCase() + post.comments[0].text.toLowerCase()).includes(searchTerms)
    })
    
    setPosts(newState)
  }

  const addLike = (id, n) => {
    const newData = state
    const likedPostIndex = newData.findIndex((post) => post.id === id)
    newData[likedPostIndex].likes = n
    setState(newData)
  }

  const addComment = (id, comment) => {
    let newData = state
    const commentPostIndex = newData.findIndex((post) => post.id === id)
    newData[commentPostIndex].comments.push(comment)
    setState(newData)
  }

  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      <SearchBar setSearchTerms={setSearchTerms} searchPost={searchPost} />
      <PostsPage posts={posts} addLike={addLike} addComment={addComment} />
    </div>
  );
};

export default App;
