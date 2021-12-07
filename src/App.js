import React, {useState} from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  const [searchTerm, setSearchTerm] = useState('')

  const likePost = postId => {
    setPosts(posts.map())
    const newLike = posts.map(post =>{
      if(postId === post.id){
        return {...post, likes: post.likes+1 }
      } else {
        return post
      }
      
    })
    setPosts(newLike)
  };

  return (
    <div className='App'>
      < SearchBar setSearchTerm={setSearchTerm} />
      < Posts posts={posts} newLike={likePost} />
    </div>
  );
};
console.log('I am App.js', dummyData)
export default App;
