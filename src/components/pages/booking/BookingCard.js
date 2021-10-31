import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useSelectedBooking from '../../../hooks/useSelectedBooking';

const BookingCard = (props) => {
    const {_id,name,email,phone,tourpack,bookingStatus,date}=props.bookpackage;
    const [bookPackage,setBookPackage]=useSelectedBooking(_id);
    

    const { register, handleSubmit,reset } = useForm();

    const statusHandeler=(e)=>{
        
        
        const updateStatus=e.target.value;
        const updateBook={...bookPackage};
        updateBook.bookingStatus=updateStatus;

        setBookPackage(updateBook);

    }

    const url=`http://localhost:5000/booking/${_id}`;

    const onSubmit = data =>{
        console.log(data);
        axios.put(url,bookPackage)
        .then(result=>{
                alert('Update successfully');
              //  console.log(data);
                reset();
            
        })
    }



    return (
        <Col>
            <Card className=" h-100 shadow-lg p-2 package-card">
                
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold package-title">{name}</Card.Title>
                <Card.Title className="text-capitalize fw-bold package-title">Email: {email}</Card.Title>
                <Card.Title className="text-capitalize fw-bold package-title">Phone: {phone}</Card.Title>
                <Card.Text className="package-price mb-0"> Booking Package:<span className="cost mb-0"> {tourpack}</span> (single)</Card.Text>

                <Card.Text className="fw-bold text-primary mt-0">Tour Date: {date}</Card.Text>
                 
                <Card.Footer>

                <Card.Text className="package-duration mt-0">Booking Status: {bookingStatus}</Card.Text>
                    
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("bookingStatus",  { required: true })} onChange={statusHandeler}  />
                
                <input className="btn btn-success" type="submit" />
                </form>
                </Card.Footer>
                
                

                <Button onClick={()=>props.updateHandeler(_id)} className="btn btn-info my-3 me-2">Update</Button>
                
                <Button onClick={()=>props.deleteHandeler(_id)} className="btn btn-danger my-3">Delete</Button>

                
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookingCard;