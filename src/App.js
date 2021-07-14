const [posts, setPosts] = useState(dummyData);
const [searchTerm, setSearch] = useState("");
useEffect(() => {
  searchByUsername();
}, [searchTerm]);

const inputChange = (e) => {
  setSearch(e.target.value);
};

const searchByUsername = () => {
  let newPosts = [];
  posts.forEach((post) => {
    if (post.username.includes(searchTerm)) {
      newPosts.push(post);
      setPosts(newPosts);
    }
  });
};

const likePost = (postId) => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts] = useState(dummyData)
  // const [searchTerm, setSearch] = useState("")
  const likePost = postId => {
    console.log("postid: ", postId)
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
        
     */
        let newPosts = posts.map( post => {
          if(post.id === postId) {
            post.likes++
          }
          return post
        })
  
        console.log("newPosts: ", newPosts)
  
        setPosts(newPosts)
  };

  return (
    <div className='App'>

<SearchBar />
      <Posts likePost={likePost} posts={posts}/>
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;