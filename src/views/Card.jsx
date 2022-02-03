import React from 'react';
import '../views/Card.css'

function Card({ src, title }) {
    return (
        <div className="card">
            <img src={src} alt="card" />
            <div className="card__title">
                <p>{title}</p>
            </div>

        </div>);
}

export default Card;
