import React from 'react';
import './TourPackage.css';
import { Card, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const Tour = (props) => {
    const {_id,title,price,img,tour_date,tour_duration}=props.tourpackage;


    return (
        <Col>
            <Card className="w-100 shadow-lg p-2 package-card">
                <Card.Img variant="top" src={img} height="200" />
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold package-title">{title}</Card.Title>
                <Card.Text className="package-price mb-0">Package Cost: <span className="cost mb-0"> {price}</span> TK (single)</Card.Text>

                <Card.Text className="package-date my-0">Possible Date: {tour_date}</Card.Text>
                 
                <Card.Footer>
                    <Card.Text className="package-duration mt-0">{tour_duration} Tour Package</Card.Text>
                </Card.Footer>
                
                
                <Button onClick={()=>props.handleDetails(_id)} className="btn btn-success my-3">{props?.children}</Button>


                
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tour;