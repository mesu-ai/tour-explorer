import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useBooking from '../../../hooks/useBooking';
import MyBookingCard from './MyBookingCard';

const MyBooking = () => {
   const {user}= useAuth();
   const [bookingPackage,setBookingPackage]=useBooking();


//    console.log (bookingPackage);
   
    const mybookings= bookingPackage.filter(bookpackage=>bookpackage.email===user.email);
    console.log(mybookings);


    const deleteHandeler=(id)=>{
        const url=`https://warm-journey-25318.herokuapp.com/booking/${id}`;
      //  console.log(id);

        const proceed=window.confirm('Are you want to sure cancle the booking?');

        if(proceed){
            axios.delete(url)
            .then(result=>{
                const remainingBooking=bookingPackage.filter(bookpackage=>bookpackage._id!==id);
                setBookingPackage(remainingBooking);          
        })

        }
    }


    return (

        <> 

        {
         mybookings.length===0? <div className="d-flex flex-column align-items-center justify-content-center" style={{height:'500px'}}> <h3 className="text-danger">You Have No Booking Package !</h3> <Link to='/services'> <button className="btn btn-primary mt-3">Book Now</button> </Link> </div>:
        
        <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">

        {

            mybookings.map(bookpackage=><MyBookingCard bookpackage={bookpackage} key={Math.random()} deleteHandeler={deleteHandeler}></MyBookingCard>)    
         }

         </Row>

}

         </>
        
    );
};

export default MyBooking;