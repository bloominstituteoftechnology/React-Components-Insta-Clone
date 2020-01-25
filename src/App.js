/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";

// import the PostsPage and SearchBar and add them to the App
// import dummydata
import PostsPage from './components/PostsContainer/PostsPage';
import dummydata from './dummy-data';

const App = (props) => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState({dummydata});

  const bringData = () =>{
    setData(data);
  }
  // const {why} = props

  const mockData = {
    name: 'Ebi', 
    location: 'here'
  }
  {console.log(console.log(mockData))}
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      {/* {data} */}
<button onClick={bringData}>Bring Data</button>
<h1>{mockData.name} is {mockData.location}</h1>

    </div>
  );
};

export default App;
