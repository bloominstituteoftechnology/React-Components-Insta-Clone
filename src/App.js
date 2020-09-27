/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React , {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';
import dummyData from './dummy-data';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
// var dummyData = require('./dummy-data.js').default;
const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  // State for Dummy Data
  const [posts, setPosts] = useState(dummyData);
  // State to hold  search term
// console.log(posts);

  // const [searchT, setSearchT] = useState(PostHeader);
// console.log(searchT);

  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.


      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      if id.likes == undefined Create id.likes else ++id.likes 
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    setPosts(posts.map((dEl)=>{
      if(dEl.id === postId){
        return {...dEl, likes: dEl.likes+1};
      }else{
        return dEl;
      }
    }))
  };

  return (
    <div className='App'>
      {
        // postObj.map( es, e = (ee)=>{
        //   return ee.id;
        // })
      
      /* Add SearchBar and Posts here to render them */}

      {/* Check the implementation of each component, to see what props they require, if any! */}
      <SearchBar />
      <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
