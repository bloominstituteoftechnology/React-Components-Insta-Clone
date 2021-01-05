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
      Posts.map(elm => {
                      if (elm.id = postId)
                      {
                        return { ...elm, likes: elm.likes++ };
                      }
                      else
                      {
                        return elm;
                      }  
                    })
    );  
  };

  return (
    <div className='App'>
      {SearchBar(Posts)}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
