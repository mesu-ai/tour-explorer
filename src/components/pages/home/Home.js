import React from 'react';
import About from '../../about/About';
import Banner from '../../banner/Banner';
import Contract from '../../contract/Contract';
import TopPackage from '../tourPackage/TopPackage';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <TopPackage></TopPackage>
            <About></About>
            <Contract></Contract>
            
        </>
    );
};

export default Home;