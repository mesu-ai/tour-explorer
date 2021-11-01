import { useEffect, useState } from 'react';

const useTourPackage = () => {
    const [tourpackages,setTourPackages]= useState([]);
    
    const url='https://warm-journey-25318.herokuapp.com/tourpackages';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPackages(data))

    },[]);

   
    return [tourpackages,setTourPackages];
};

export default useTourPackage;