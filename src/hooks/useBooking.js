import { useEffect, useState } from 'react';


const useBooking = () => {
    const [bookingPackage,setBookingPackage]= useState([]);
    


    const url='http://localhost:5000/booking';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookingPackage(data))

    },[]);

   
    return [bookingPackage,setBookingPackage];
};

export default useBooking;