import React from 'react';
import "./Category.css";

function Category({ title, img }) {
    return (
        <div className="category">
            <div className="category__info">
            <p><h2>{title}</h2></p>
            </div>
            <img src={img} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Category
