import React from 'react'
import Header from '../../components/Header/Header';
import List from '../../components/StrainsList/List';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Header />
            <List />
        </div>
    );
}

export default Home;