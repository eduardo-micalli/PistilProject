import React from "react";
import './Filter.css';

function Filter() {
    return (
        <div className="filters">
            <input type='text' placeholder="Filter by strain" />
            <input type='text' placeholder="Filter by strain type" />
            <input type='text' placeholder="Filter by brand" />
            <button>Filter</button>
        </div>
    );
}

export default Filter;