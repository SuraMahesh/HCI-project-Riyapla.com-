import React from 'react';
import "./SearchResults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";


function SearchResults({
    img,
    shop_name,
    title,
    description,
    star,
    price,
}) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon
            className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{shop_name}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon
                        className="searchResult__star" />
                        <p>
                        <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                    <h2>{price}</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SearchResults
