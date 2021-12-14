import React from 'react';
import Banner from './banner/Banner';
import Contract from './contract/Contract';
import TopPackage from '../tourPackage/TopPackage';
import AdventureIdea from './advantureIdea/AdventureIdea';
import OutdoorExperience from './outdoorExperience/OutdoorExperience';
import FeatureProducts from './featureProducts/FeatureProducts';

const Home = () => {
    return (
        <>
            
            <Banner></Banner>
            <AdventureIdea></AdventureIdea>
            <TopPackage></TopPackage>
            <OutdoorExperience></OutdoorExperience>
            <FeatureProducts></FeatureProducts>
            <Contract></Contract>
            
        </>
    );
};

export default Home;