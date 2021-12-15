import React from 'react';
import Banner from './banner/Banner';
import Contract from './contract/Contract';
import TopPackage from '../tourPackage/TopPackage';
import AdventureIdea from './advantureIdea/AdventureIdea';
import OutdoorExperience from './outdoorExperience/OutdoorExperience';

import FeatureProducts from './featureProducts/FeatureProducts';


const Home = () => {
    return (
        <div className=''>
            
            <Banner></Banner>
            <AdventureIdea></AdventureIdea>
            <FeatureProducts></FeatureProducts>
            <TopPackage></TopPackage>
            <OutdoorExperience></OutdoorExperience>
            <Contract></Contract>
            
        </div>
    );
};

export default Home;