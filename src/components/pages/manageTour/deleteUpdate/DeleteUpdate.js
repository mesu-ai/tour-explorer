import axios from 'axios';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useTourPackage from '../../../../hooks/useTourPackage';
import TourCard from '../TourCard';

const DeleteUpdate = () => {
    const [tourpackages,setTourPackages]= useTourPackage();
    const history=useHistory();
    

    const deleteHandeler=(id)=>{
        const url=`https://warm-journey-25318.herokuapp.com/tourpackages/${id}`;
        console.log(id);

        const proceed=window.confirm('Are you want to sure delete the package?');

        if(proceed){
            axios.delete(url)
            .then(result=>{
                const remainingPackage=tourpackages.filter(tourpackage=>tourpackage._id!==id);
                setTourPackages(remainingPackage);          
        })

        }
    }

    const updateHandeler=(id)=>{
        const url=`/tour/updatetour/${id}`;
        history.push(url);
        
        console.log(id);


    }

    return (
        <Row lg={3} xs={1} md={2} className="g-4 my-5 container mx-auto">
            {
            tourpackages.map(tourpackage=><TourCard key={Math.random()} tourpackage={tourpackage} deleteHandeler={deleteHandeler} updateHandeler={updateHandeler} ></TourCard>)
            }
            
        </Row>
    );
};

export default DeleteUpdate;