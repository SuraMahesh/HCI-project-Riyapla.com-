import React from 'react';
import "./SearchResults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


function SearchResults(
    img,
    location,
    title,
    description,
    star,
    price,
) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon
            className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">

                </div>
                <div className="searchResult__infoBottom">
                    
                </div>
            </div>
            
        </div>
    )
}

export default SearchResults
