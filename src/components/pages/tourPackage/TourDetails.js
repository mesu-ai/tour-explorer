import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const TourDetails = () => {
    const {id}= useParams();
    const url=`http://localhost:5000/tourpackages/${id}`;

    const [tourPackage,setTourPackage]= useState([]);
   
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPackage(data))

    },[url]);

    // console.log(tourPackage);



    return (
         <Card className="w-100 shadow-lg p-2 package-card container my-5">
                <Card.Img  variant="top" src={tourPackage?.img} height="300" />
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold package-title">{tourPackage?.title} Package</Card.Title>
                <Card.Text className="package-price mb-0">Package Cost: <span className="cost mb-0"> {tourPackage?.price}</span> TK (single)</Card.Text>

                <Card.Text className="package-date my-0">Possible Date: {tourPackage?.tour_date}</Card.Text>

                <Card.Text className="">{tourPackage?.description}</Card.Text>
                 
                <Card.Footer>
                    <Card.Text className="package-duration mt-0">{tourPackage?.tour_duration} Tour Package</Card.Text>
                </Card.Footer>
                

                <Button className="btn btn-success my-3">Book A Package</Button>
                </Card.Body>
            </Card>
    );
};

export default TourDetails;