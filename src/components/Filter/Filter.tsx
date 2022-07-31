import React from "react";
import { FilterButton, FilterInput } from "./style";

function Filter() {
    return (
        <div>
            <FilterInput type='text' placeholder="Filter by strain" />
            <FilterInput type='text' placeholder="Filter by strain type" />
            <FilterInput type='text' placeholder="Filter by brand" />
            <FilterButton>Filter</FilterButton>
        </div>
    );
}

export default Filter;