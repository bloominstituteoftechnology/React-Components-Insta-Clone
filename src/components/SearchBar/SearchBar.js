// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon id='cam'icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon id='comp'icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon id='heart'icon={faHeart}   />
        </div>
        <div className="social">
          <FontAwesomeIcon id='soc'icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
