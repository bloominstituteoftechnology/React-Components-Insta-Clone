/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/
// Import the state hook
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
 /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
    
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */


import React, { useState } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import './App.css';



const App = () => {

  const [posts, setPosts] = useState(dummyData);
  const [searches, setSearches] = useState(" ");

  const likePost = postId => {
    setPosts(posts.map(object => {
      return object.id === postId ? { ...object, likes: object.likes + 1 } : object
    }
    ))
  };
    
  return (
    <div className='App'>
      <SearchBar />
      <posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
