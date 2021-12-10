import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useTourPackage from '../../../hooks/useTourPackage';
import TourCard from './TourCard';

const TourPackages = () => {
   const [tourpackages]= useTourPackage();
    console.log(tourpackages);


   const history=useHistory();
   const handleDetails=(id)=>{
      
    const url=`/tourdetails/${id}`;
    history.push(url);


   }


    return (
        <div>
            <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">
            {
            tourpackages.map(tourpackage=><TourCard tourpackage={tourpackage} key={Math.random()} handleDetails={handleDetails}>

            <span>Details</span>
            
            </TourCard>)
            }
 
            </Row>
            
        </div>
    );
};

export default TourPackages;