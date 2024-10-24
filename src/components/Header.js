import React from 'react';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header-container">
      {/* Search Box */}
      <div className="search-box">
        <SearchIcon className='search-icon' />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Buttons */}
      <div className="header-buttons">
        <button className="btn add-new">
          <i className="fa fa-plus"></i> Add New
        </button>
        <button className="btn sign-in">Sign in</button>
        <button className="btn sign-up">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
