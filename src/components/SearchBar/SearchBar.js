// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {
  const { getFilteredPosts, setSearchTerm, posts } = props;

  // console.log("getFilteredPosts: ", getFilteredPosts)

  const changeHandler = (e) => {
    // not the same variable as searchTerm in App.js
    const searchTerm = e.target.value;
    //setSearchTerm({searchTerm: e.target.value}) // cleaner option 
    getFilteredPosts(searchTerm);
    console.log("The changeHandler is running.")
  }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={changeHandler} 
          /* onEnter={getFilteredPosts} */
          /* onChange={getFilteredPosts} */
          
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
