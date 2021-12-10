import { useEffect, useState } from 'react';

const useTopTourPackage = () => {
    const [topTourPackages,setTopTourPackages]= useState([]);

    
    const url='https://warm-journey-25318.herokuapp.com/tourpackages';

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTopTourPackages(data.slice(-6));
        })  

    },[]);

    console.log(topTourPackages);
   
    return [topTourPackages];
};

export default useTopTourPackage;