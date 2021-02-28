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
import Posts from './components/Posts/Posts.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data.js'


const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const [posts, setPosts] = useState(dummyData)

  console.log(posts)


  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */

    {posts.map(likes => {
      const likeArray = likes.Likes;
      console.log(likeArray);
      return likeArray; //[{400}, {4070}]
    })}








      // setPosts maps throughout posts or (dummyData) 
     setPosts(posts.map(dummyData => { // dummyData is data in this case 

      //if dummyData's Id matches PostIds 

        

    if (dummyData.id == postId){


      //Make those Ids props
      const props = {postId}

      //and pass those props to the children using spread opperator (...)
      return {...props};
    }


    //if not matching
    else {

      //just return regular old id  (don't pass down)
      return dummyData.id;
    }
    }))


  };

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar />
      <Posts likePost={likePost} posts={posts}/>



{//                    DIAGRAM TO HELP ME UNDERSTAND STUFF
//
//        ________________________________________________________________________
//        |                                             ____               ___    |
//        |                   index.js   :)     |   |  |      |     |     |   |   |
//        |                        |            |___|  |___   |     |     |   |   |
//        |                      App.js         |   |  |      |     |     |   |   |
//        |                    /        \       |   |  |____  |___  |___  |___|   |
//        |       SearchBar.js      Posts.js                                      |
//        |                            |                                          |
//        |                          Post.js ________________                     |
//        |                        /    |                    \                    |
//        |          PostHeader.js   LikeSection.js        Comments.js :)         |
//        |                                                    |                  |
//        |                                                Comment.js  :)         |
//        |                                                                       |
//        |_______________________________________________________________________|
}

      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
