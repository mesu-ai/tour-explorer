import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyBookingCard = (props) => {
    
    const  {_id,email,phone,tourpack,bookingStatus,date}=props.bookpackage;


    // console.log(props);

    return (

        <Col>
        
            <Card className=" h-100 shadow-lg p-2 package-card">
                
                <Card.Body>
                {/* <Card.Title className="text-capitalize fw-bold package-title">{name}</Card.Title> */}
                <Card.Title className="text-capitalize fw-bold package-title">Email: {email}</Card.Title>
                <Card.Title className="text-capitalize fw-bold package-title">Phone: {phone}</Card.Title>
                <Card.Text className="package-price mb-0"> Booking Package:<span className="cost mb-0"> {tourpack}</span> (single)</Card.Text>

                <Card.Text className="fw-bold text-primary mt-0">Tour Date: {date}</Card.Text>
                 
                <Card.Footer>

                <Card.Text className="fw-bold mt-0">Booking Status: <span className="text-danger">{bookingStatus}</span> </Card.Text>


                    
                </Card.Footer>

                <Button onClick={()=>props.deleteHandeler(_id)} className="btn btn-danger my-3">Cancle Order</Button>
                
                
                </Card.Body>
            </Card>


        </Col>
    );
};

export default MyBookingCard;