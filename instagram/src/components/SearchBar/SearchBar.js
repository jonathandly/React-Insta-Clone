import React from 'react';

import './SearchBar.css';
import { Instagram, Compass, Heart, User } from 'react-feather';

const SearchBar = _ => {
    return (
        <div className="search-div">
            <div className="ig-logo-text">
                <Instagram className="instagram-logo" />
                <span className="pipe">|</span>
                <p className="ig-header-text">Instagram</p>
            </div>
            <input className="search" placeholder="Search"></input>
            <div className="compass-heart-user">
                <Compass className="compass" />
                <Heart className="heart" />
                <User className="user" />
            </div>
        </div>
    );
}

export default SearchBar;