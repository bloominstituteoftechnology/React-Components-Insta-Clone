/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.2 Instagram Clone- Apps.js
 * 7/13/2021
 **/

/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';

// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";

// Import the dummyData
import dummyData from "./dummy-data";

import './App.css';

/* Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
To make the search bar work (which is stretch) we'd need another state to hold the search term. */

//App function definition, no parameters
const App = () => 
{
  /*
    This function serves the purpose of increasing the number of likes by one, of the post with a given id.

    The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
    This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

    Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
    The callback passed into `map` performs the following logic:
    - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
    - otherwise just return the post object unchanged.
  */
  
  //Declare state variable, set(), init the state to dummy data
  const [posts, setPosts] = useState(dummyData);
    

  /* Compare to the guided proj: app.js  changeStatus */
  //likePost function, takes postId parameter
  const likePost = postId => 
  {
    
    //likeIncrementor definition, maps over post array
    const likeIncrementor = posts.map((post) => 
    {
      //If posts id = postId
      if(post.id === postId)
      {
        //Return this, increment likes
        //...spread operator copies properties of post, overwrites likes: updates likes +1
        return {...post, likes: post.likes + 1}
      }
      
      //Otherwise
      else { return post; }
    });

    setPosts(likeIncrementor);
   
  };
    
  
  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them 
        * Render SearchBar */}
      <SearchBar />

      {/* Check the implementation of each component, to see what props they require, if any! 
        * Render Posts
        * left of = is the component, right side of = is the data */}
      <Posts likePost = {likePost} posts = {posts}/>  
    </div>
  );
};

//Export default
export default App;
