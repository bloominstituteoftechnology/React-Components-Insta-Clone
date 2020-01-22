// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="logo-social">
        <i className="fab fa-instagram" />  |
        <img  className="image-wrapper" src={ require('./name-logo.png') } />
      </div>
      <div>
    
      </div>
     
      <form className="search-form">
        <input
        className="input-search"
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
