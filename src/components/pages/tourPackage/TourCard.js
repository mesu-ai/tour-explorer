import React from 'react';
import './TourPackage.css';
import { Card, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const TourCard = (props) => {
    const {_id,title,price,img,tour_date,tour_duration}=props.tourpackage;


    return (
        <Col>
            <Card className="h-100 shadow-lg p-2 package-card border border-dark ">
                <Card.Img variant="top" src={img} height="180" />
                <Card.Body className='text-overlap mt-1'>
                <Card.Title className="text-capitalize fw-bold package-title">{title}</Card.Title>
                <Card.Text className="package-price mb-0 fw-bold"> <span className="cost mb-0"> {price}</span> TK (single  Package)</Card.Text>
                 
                <Card.Footer className='my-2'>
                    <Card.Text className="package-duration my-0 p-0">{tour_duration} Tour Package</Card.Text>
                    <Card.Text className="package-date my-0 p-0">Possible Date: {tour_date}</Card.Text>
                </Card.Footer>


                <div className="card-overlay d-flex flex-column justify-content-center align-items-center">

                <Card.Title className="text-capitalize fw-bold text-primary  fs-4 mb-3">{title}</Card.Title>

               <button onClick={()=>props.handleDetails(_id)} type="button" className="btn btn-outline-success card-btn fw-bold">{props?.children} <i className="fas fa-angle-double-right ms-2"></i></button>
              </div>


                
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TourCard;