import { useEffect, useState } from 'react';

const useSelectedPackage = (id) => {
    const [tourPack,setTourPack]= useState([]);
    
    const url=`https://warm-journey-25318.herokuapp.com/tourpackages/${id}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPack(data))

    },[url]);

   
    return [tourPack,setTourPack];
};

export default useSelectedPackage;