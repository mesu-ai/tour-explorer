import React from 'react';
import About from '../about/About';
import Banner from './banner/Banner';
import Contract from './contract/Contract';
import TopPackage from '../tourPackage/TopPackage';
import AdventureIdea from './advantureIdea/AdventureIdea';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <AdventureIdea></AdventureIdea>
            <TopPackage></TopPackage>
            <About></About>
            <Contract></Contract>
            
        </>
    );
};

export default Home;