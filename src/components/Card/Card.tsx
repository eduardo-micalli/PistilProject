import React from "react";
import './Card.css';

interface CardProps {
    name: string;
    type: string;
    brand: string;
    category: string;
    weight: string;
}

function Card(props: CardProps) {
    return (
        <div className="cards">
            <h3>{props.name}</h3>
            <h6>Type: {props.type}</h6>
            <h6>Brand: {props.brand}</h6>
            <h6>Category: {props.category}</h6>
            <h6>Weight: {props.weight}</h6>
        </div>
    );
}

export default Card;