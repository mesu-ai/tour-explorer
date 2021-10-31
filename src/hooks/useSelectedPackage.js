import { useEffect, useState } from 'react';

const useSelectedPackage = (id) => {
    const [tourPack,setTourPack]= useState([]);
    
    const url=`http://localhost:5000/tourpackages/${id}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTourPack(data))

    },[url]);

   
    return [tourPack,setTourPack];
};

export default useSelectedPackage;