import React from "react";
import Filter from "../Filter/Filter";
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h2>Pistil Data</h2>
            <div className="filters">
                <Filter />
            </div>
        </div>
    );
}

export default Header;