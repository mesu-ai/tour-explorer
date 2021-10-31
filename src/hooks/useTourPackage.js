import { useEffect, useState } from 'react';

const useTourPackage = () => {
    const [tourpackages,setTourPackages]= useState([]);
    
    const url='http://localhost:5000/tourpackages';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPackages(data))

    },[]);

   
    return [tourpackages,setTourPackages];
};

export default useTourPackage;