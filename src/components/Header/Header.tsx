import React from "react";
import Filter from "../Filter/Filter";
import { HeaderFilters, HeaderMenu, HeaderText } from "./style";

function Header() {
    return (
        <HeaderMenu>
            <HeaderText>Pistil Data</HeaderText>
            <HeaderFilters>
                <Filter />
            </HeaderFilters>
        </HeaderMenu>
    );
}

export default Header;