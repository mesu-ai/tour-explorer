import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const BookingCard = (props) => {
    const{user}= useAuth();
    const  {_id,name,email,phone,tourpack,bookingStatus,date,age,tourprice,totalprice}=props.bookpackage;

    const statusHandeler=(id)=>{

     const url=`https://warm-journey-25318.herokuapp.com/booking/${id}`;

     
     const status={
        name:user.displayName,
        email:user.email,
        age:age,
        phone:phone,
        date:date,
        tourpack:tourpack,
        tourprice:tourprice, 
        totalprice:totalprice,
        bookingStatus: "Approved",                 
    
    };

        
     
         axios.put(url,status)
        .then(result=>{
            
                alert('Update successfully');
                window.location.reload();
                // console.log(status);
                
                // reset();
            
        })



    }



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
                
                <Card.Text className="text-black fw-bold mt-0">Booking Status: <span className="text-danger fw-bold">{bookingStatus}</span> </Card.Text>


                <button className="btn btn-dark btn-outline-warning" onClick={()=>statusHandeler(_id)} >Status Update</button>


                </Card.Footer>
                
                

                <Button onClick={()=>props.updateHandeler(_id)} className="btn btn-info my-3 me-2">Update</Button>
                
                <Button onClick={()=>props.deleteHandeler(_id)} className="btn btn-danger my-3">Delete</Button>

                
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookingCard;