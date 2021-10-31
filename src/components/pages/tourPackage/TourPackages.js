import React from 'react';
import { Row } from 'react-bootstrap';
import useTourPackage from '../../../hooks/useTourPackage';
import Tour from './Tour';

const TourPackages = () => {
   const [tourpackages]= useTourPackage();
   console.log(tourpackages);



    return (
        <div>
            <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">
            {
            tourpackages.map(tourpackage=><Tour tourpackage={tourpackage} key={Math.random()}></Tour>)
            }
 
            </Row>
            
        </div>
    );
};

export default TourPackages;