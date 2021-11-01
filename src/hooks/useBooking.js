import { useEffect, useState } from 'react';


const useBooking = () => {
    const [bookingPackage,setBookingPackage]= useState([]);
    


    const url='https://warm-journey-25318.herokuapp.com/booking';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookingPackage(data))

    },[]);

   
    return [bookingPackage,setBookingPackage];
};

export default useBooking;