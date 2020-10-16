import React from 'react';
import "./JobsCard.css";

function JobsCard( {src, title, description} ) {
    return (
        <div className="card">
            <img src={src} />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                
            </div>
            </div>
    )
}

export default JobsCard
