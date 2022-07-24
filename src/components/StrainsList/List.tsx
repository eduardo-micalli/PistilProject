import React, { useState } from "react";
import Card from "../Card/Card";
import Response from '../../response.json';
import './List.css';

function List() {
    const [json, setJson] = useState(Response.data);
    return (
        <div className="list">
            {json.map((card, index) => (
                <Card key={index} name={card.name} type={card.type} brand={card.brand} category={card.category} weight={card.weight} />
            ))}
        </div>
    );
}

export default List;