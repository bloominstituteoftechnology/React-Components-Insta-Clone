/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData)

  const likePost = postId => {
    
    setPosts(posts.map(post => {
      return post.id === postId ? {...post, likes: post.likes + 1} : post
    }))
    
  };

  return (
    <div className='App'>

<SearchBar />
      <Posts posts={posts} likePost={likePost}/>

    </div>
  );
};

export default App;
