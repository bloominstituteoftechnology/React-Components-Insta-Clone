// You do not need to change any code in this file for MVP
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">📷</div>
      <form className="search-form">
        <input type="text" placeholder="Search for a post..." />
      </form>
      <div className="social-wrapper">
        <div className="social">🫶</div>
        <div className="social">💛</div>
        <div className="social">⭕</div>
      </div>
    </div>
  );
};

export default SearchBar;
