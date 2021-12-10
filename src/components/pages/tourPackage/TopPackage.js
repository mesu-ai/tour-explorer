import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useTopTourPackage from '../../../hooks/useTopTourPackage';
import TourCard from './TourCard';


const TopPackage = () => {

    const [topTourPackages]= useTopTourPackage();
    console.log(topTourPackages);


    const history=useHistory();
    const handleDetails=(id)=>{
      
    const url=`/tourdetails/${id}`;
    history.push(url);


   }
    return (
        <div className='container my-5'>
            
            <h3 className="fs-2 fw-bold pt-5">Latest Package</h3>
            <Row lg={3} xs={1} md={2} className="g-4 my-4  mx-auto">
            
            {
            topTourPackages.map(tourpackage=><TourCard tourpackage={tourpackage} key={Math.random()} handleDetails={handleDetails}>

            <span>Book Now</span>
            

            </TourCard>)
            }
 
            </Row>
            
        </div>
    );
};

export default TopPackage;