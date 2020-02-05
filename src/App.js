/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState, useEffect} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage';
// import dummydata
import dummyData from './dummy-data';
// //
const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(dummyData);
  
  


  useEffect(() => {
		const results = posts.filter(character => {
			return character.username.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setSearch(results);
		//eslint-disable-next-line
	}, [searchTerm]);

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};
  
  console.log(posts);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar handleChange={handleChange} searchTerm={searchTerm}/>
      <PostsPage data={posts} search={search} searchTerm={searchTerm}/>
      
    </div>
  );
};

export default App;



