/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/
// id,
    // username,
    // thumbnailUrl,
    // likes,
    // timestamp,
    // comments: [
    //     {
    //         id,
    //         username,
    //         text,
    //     } ]

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import dummyData from './dummy-data.js';
import  SearchBar from './components/SearchBar/SearchBar.js';
import LikeSection from './components/Posts/LikeSection.js';

const App = () => {
  const [Posts, setPosts] = useState(dummyData)
  const [SearchTerm, setSearchTerm] = useState('')
  
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    setPosts(
      Posts.map(post => {
                      if (postId === postId){
                        let likes = post.likes ++
                        let addedPost = {...post, 'likes': likes}
                      
                        return addedPost
                      }
                      else{
                        return post;
                      }  
                    })
    );  
  };

  return (
    <div className='App'>
      {SearchBar(Posts)}
      {<Posts likePost = {likePost} posts = {posts}/>}
    </div>
  );
};

export default App;
