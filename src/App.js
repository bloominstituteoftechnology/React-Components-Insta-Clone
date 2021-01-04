/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from "react";

// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts.js";
import Search from "./components/SearchBar/SearchBar.js";
// Import the dummyData

import "./App.css";
import dummyData from "./dummy-data.js";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData);
  const [comment, setComment] = useState({});

  const handleSearch = (event) => {
    event.persist();
    const { value } = event.target;
    const filteredPosts = posts.filter((post) => {
      return post.username.toLowerCase().includes(value.toLowerCase());
    });
    const postsToUse = value ? filteredPosts : dummyData;
    setPosts(postsToUse);
  };

  const handleComment = (event, postId) => {
    event.persist();
    const { value } = event.target;
    setComment((prevComment) => ({ ...prevComment, [postId]: value }));
  };

  const handlePostComment = (postId) => {
    const toUpdate = [...posts];
    const post = toUpdate.find((post) => post.id === postId);
    if (post) {
      const newComment = {
        id: Math.floor(Math.random() * (5000 - 1) + 1),
        username: 'tom',
        text: comment[postId]
      };
      
      post.comments.push(newComment);
      setPosts(toUpdate);

      const toUpdateComment = { ...comment };
      delete toUpdateComment[postId];
      setComment(toUpdateComment);
    }
  };

  const likePost = (postId) => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    setPosts(
      posts.map((element) => {
        if (postId === postMessage.id) {
          const likes = element.likes + 1;
          console.log(element.likes);
          const newPost = { ...element, likes: likes }; // does nothing
          return newPost; //does nothing
        } else {
          return element;
        }
      })
    );
  };

  return (
    <div className="App">
      <Search onChange={handleSearch} />
      <Posts
        likePost={likePost}
        posts={posts}
        onComment={handleComment}
        onCommentEnter={handlePostComment}
      />
      <h3>hello</h3>
    </div>
  );
};

export default App;
