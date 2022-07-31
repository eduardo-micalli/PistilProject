import React from "react";
import { Cards, CardsDetails, CardsName } from "./style";

interface CardProps {
    name: string;
    type: string;
    brand: string;
    category: string;
    weight: string;
}

function Card({ name, type, brand, category, weight }: CardProps) {
    return (
        <Cards>
            <CardsName>{name}</CardsName>
            <CardsDetails>Type: {type}</CardsDetails>
            <CardsDetails>Brand: {brand}</CardsDetails>
            <CardsDetails>Category: {category}</CardsDetails>
            <CardsDetails>Weight: {weight}</CardsDetails>
        </Cards>
    );
}

export default Card;