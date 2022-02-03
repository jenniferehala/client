import React from 'react';
import '../views/Card.css'

function SingleCard() {
    return (
        <div className="card">
            <div className="card__title">
            </div>
            <img src={src} alt="card" />
        </div>
    );
}

export default SingleCard;
