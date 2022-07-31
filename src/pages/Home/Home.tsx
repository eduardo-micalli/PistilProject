import React from 'react'
import Header from '../../components/Header/Header';
import List from '../../components/StrainsList/List';
import { HomeDiv } from './style';

function Home() {
    return (
        <HomeDiv>
            <Header />
            <List />
        </HomeDiv>
    );
}

export default Home;