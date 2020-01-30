// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerms, searchPost }) => {

  const onEnterKeyDown = (e) => {
    e.preventDefault()
    e.key === 'Enter' && searchPost()
  }

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x" />
        <h3>Fakergram</h3>
      </div>
      <form className="search-form">
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerms(e.target.value)}
          onKeyDown={(e) => {e.key ==='Enter' && onEnterKeyDown(e)}}
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
