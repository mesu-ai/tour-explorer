import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BookingCard = (props) => {
    const {_id,name,email,age,phone,tourpack,tourprice,date}=props.bookpackage;





    return (
        <Col>
            <Card className=" h-100 shadow-lg p-2 package-card">
                
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold package-title">{name}</Card.Title>
                <Card.Title className="text-capitalize fw-bold package-title">Email: {email}</Card.Title>
                <Card.Title className="text-capitalize fw-bold package-title">Phone: {phone}</Card.Title>
                <Card.Text className="package-price mb-0"> Booking Package:<span className="cost mb-0"> {tourpack}</span> (single)</Card.Text>
                 
                <Card.Footer>
                    <Card.Text className="package-duration mt-0">Tour Date: {date}</Card.Text>
                </Card.Footer>
                
                <Button onClick={()=>props.updateHandeler(_id)} className="btn btn-success my-3 me-2">Update</Button>
                
                <Button onClick={()=>props.deleteHandeler(_id)} className="btn btn-danger my-3">Delete</Button>

                
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookingCard;