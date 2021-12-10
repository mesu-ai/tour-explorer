import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useTourPackage from '../../../hooks/useTourPackage';
import Tour from './Tour';

const TopPackage = () => {

    const [topTourPackages]= useTourPackage();
    console.log(topTourPackages);


    const history=useHistory();
    const handleDetails=(id)=>{
      
    const url=`/tourdetails/${id}`;
    history.push(url);


   }
    return (
        <div className='container'>
            <Row lg={3} xs={1} md={2} className="g-4 my-5  mx-auto">
            
            {
            topTourPackages.map(tourpackage=><Tour tourpackage={tourpackage} key={Math.random()} handleDetails={handleDetails}>

            <span>Book Now</span>
            

            </Tour>)
            }
 
            </Row>
            
        </div>
    );
};

export default TopPackage;