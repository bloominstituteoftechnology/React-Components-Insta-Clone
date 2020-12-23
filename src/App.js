/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from "react"; // Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Post from './components/Posts/Post.js'
import PostHeader from './components/Posts/PostHeader.js'
import LikeSection from './components/Posts/LikeSection.js'
import Posts from './components/Posts/Posts.js'
import SearchBar from './components/SearchBar/SearchBar.js'

// Import the dummyData
import dummyData from './dummy-data.js';
import './App.css';
console.log("data: ", dummyData);

export default function App() {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  const [ posts, setPosts ] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [ searchTerm, setSearchTerm ] = useState('');

  // console.log("posts: ", posts);
  // console.log("searchTerm: ", searchTerm);
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
  //    */
  const likePost = postId => {
    setPosts(posts.map(post => {

      if (postId === post.id) {
        // let likes = post.likes;
        console.log("likePost is running")
        return { ...post, likes: post.likes + 1};
      } else {
        return post;
      }
     }));
  };  // gets passed down through props

  // 
  const getFilteredPosts = (searchTerm) => {
    
    // filter function over posts array, return filtered array
      let filteredPosts = posts.filter(
          posts.forEach( post => {
            if (searchTerm.trim() === post.username || searchTerm.toLowerCase() === post.username || searchTerm === post.username) {
              return post;
            } 
          })
      );
    console.log("getFilteredPosts func is running")
    setPosts(filteredPosts);
  }; // passes searchTerm, filters through posts array, creates filteredPosts array, setsPosts to filteredPosts
    


  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar getFilteredPosts={() => getFilteredPosts(searchTerm)} setSearchTerm={setSearchTerm} posts={posts}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
      <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

{/* <LikeSection numberOfLikes={post.likes} post={post}  likePost={() => likePost(post.id)} /> */}