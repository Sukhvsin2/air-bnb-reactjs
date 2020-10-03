import React from 'react'
import "./Card.css" 

function Card({content}) {
    return (
        <div className="card">
            <img src={content.src} alt="" />
            <div className="card__info">
                <h2>{content.title}</h2>
                <h4>{content.description}</h4>
                <h3>{content.price}</h3>
            </div>
        </div>
    )
}

export default Card
