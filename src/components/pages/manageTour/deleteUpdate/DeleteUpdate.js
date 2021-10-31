import React from 'react';
import useTourPackage from '../../../../hooks/useTourPackage';
import TourCard from '../TourCard';

const DeleteUpdate = () => {
    const [tourpackages]= useTourPackage();


    const deleteHandeler=(id)=>{

    }
    const updateHandeler=(id)=>{


    }

    return (
        <div>
            {
            tourpackages.map(tourpackage=><TourCard key={Math.random()} tourpackage={tourpackage} deleteHandeler={deleteHandeler} updateHandeler={updateHandeler} ></TourCard>)
            }
            
        </div>
    );
};

export default DeleteUpdate;