import { useEffect, useState } from 'react';

const useTourPackage = () => {
    const [tourpackages,setTourPackages]= useState([]);
    const [topTourPackages,setTopTourPackages]= useState([]);

    
    const url='https://warm-journey-25318.herokuapp.com/tourpackages';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTopTourPackages(data.slice(-6));
            setTourPackages(data);
        })  

    },[]);

    console.log(topTourPackages);
   
    return [tourpackages,setTourPackages,topTourPackages];
};

export default useTourPackage;