import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useBooking from '../../../hooks/useBooking';
import MyBookingCard from './MyBookingCard';

const MyBooking = () => {
   const {user}= useAuth();
   const [bookingPackage,setBookingPackage]=useBooking();
   const [usebook,setbook]=useState([]);

//    console.log (bookingPackage);

   
    const mybookings= bookingPackage.filter(bookpackage=>bookpackage.name===user.displayName);
    
    console.log(mybookings);




    return (
       
        <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">

            {
            mybookings.map(bookpackage=><MyBookingCard bookpackage={bookpackage} key={Math.random()}></MyBookingCard>)
            }

         </Row>
        
    );
};

export default MyBooking;