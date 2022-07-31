import React, { useState } from "react";
import Card from "../Card/Card";
import Response from '../../response.json';
import { CardList } from "./style";

function List() {
    const [json, setJson] = useState(Response.data);
    return (
        <CardList>
            {json.map((card, index) => (
                <Card key={index} name={card.name} type={card.type} brand={card.brand} category={card.category} weight={card.weight} />
            ))}
        </CardList>
    );
}

export default List;