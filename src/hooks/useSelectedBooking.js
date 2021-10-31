import  { useEffect, useState } from 'react';

const useSelectedBooking = (id) => {
    const [bookPackage,setBookPackage]= useState([]);
    
    const url=`http://localhost:5000/booking/${id}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookPackage(data))

    },[url]);

   
    return [bookPackage,setBookPackage];
};

export default useSelectedBooking;