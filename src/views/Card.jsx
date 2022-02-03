import React from 'react';
import '../views/Card.css'

function Card({ src, title }) {
    return (
        <div className="card">
            <div className="card__title">
                <p>{title}</p>
            </div>
            <img src={src} alt="card" />
        </div>);
}

export default Card;
