import React from 'react';
import '../views/Card.css'

function Card({ src, title }) {
    return (
        <div className="card">
            <img src={src} alt="card" />
            <div className="card__title">
                <h4>{title}</h4>
            </div>
            <p>MERN</p>

        </div>);
}

export default Card;
