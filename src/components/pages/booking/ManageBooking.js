import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useBooking from '../../../hooks/useBooking';
import BookingCard from './BookingCard';

const ManageBooking = () => {
    const [bookingPackage,setBookingPackage]=useBooking();

    const history=useHistory();
    

    const deleteHandeler=(id)=>{
        const url=`http://localhost:5000/booking/${id}`;
      //  console.log(id);

        const proceed=window.confirm('Are you want to sure delete the package?');

        if(proceed){
            axios.delete(url)
            .then(result=>{
                const remainingBooking=bookingPackage.filter(bookpackage=>bookpackage._id!==id);
                setBookingPackage(remainingBooking);          
        })

        }
    }

    const updateHandeler=(id)=>{
         const url=`/bookingupdate/${id}`;
        history.push(url);
        
      //  console.log(id);


    }



    return (
        <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">
            {
            bookingPackage.map(bookpackage=><BookingCard key={Math.random()} bookpackage={bookpackage} deleteHandeler={deleteHandeler} updateHandeler={updateHandeler} ></BookingCard>)
            }
            
        </Row>
    );
};

export default ManageBooking;