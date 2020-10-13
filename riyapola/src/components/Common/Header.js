import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import CarIcon from "@material-ui/icons/DirectionsCar";

function Header() {
    return (
        <div className="header">
            <img className="header__logo"/>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                </div>
                <div className="header__optionBasket">
                    <CarIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;