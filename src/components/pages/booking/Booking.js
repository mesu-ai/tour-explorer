import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useSelectedPackage from '../../../hooks/useSelectedPackage';
import './Booking.css';


const Booking = () => {
    const {user}= useAuth();
    const {id}=useParams();
    const url='https://warm-journey-25318.herokuapp.com/booking';


    const [tourPack] = useSelectedPackage(id);
    const { register, handleSubmit,reset } = useForm();

    const packagePrice= parseInt(tourPack.price);
    const tax= parseFloat(packagePrice*.15);
    const totalCost= parseFloat(packagePrice + tax);

   // console.log(packagePrice);

   const history=useHistory();
    const onSubmit = data => {
        const bookingStatus="Pending";
        data.bookingStatus=bookingStatus;

       
        axios.post(url,data)
        .then(result=>{
            if(result.data.insertedId){
                alert('Booking Successfully !');
                history.push('/services');

                reset();
            }
        })

        
    //    console.log(data);

    }
    
   
    return (


        <div className="container  my-5">
            <h3 className="fw-bold">Booking of <span className="text-danger text-capitalize">{tourPack?.title}</span> </h3>

       <form className=" mt-5 mx-auto booking-form" onSubmit={handleSubmit(onSubmit)}>

        <Row className="mx-auto row-cols-lg-2 row-cols-md-2 row-cols-1 g-5">
            
            <Col className="mx-auto d-flex flex-column justify-content-center">
            
            <h3>User Information</h3>
            <label className="text-start mt-2 ">Name</label>
            <input {...register("name")} value={user.displayName || ''} />
            <label className="text-start mt-2">Email</label>
            <input type="email" {...register("email")} value={user.email || ''} />

            <label className="text-start mt-2">Age</label>
            <input type="number" {...register("age")} />


            <label className="text-start mt-2">Phone No</label>
            <input type="number" {...register("phone", {required:true})} />

            
            
            </Col>


            <Col className="mx-auto d-flex flex-column justify-content-center ">
            
            <h3>Tour Information</h3>

            <label className="text-start mt-2">Tour Package</label>
            <input className="text-capitalize fw-bold" {...register("tourpack")} value={tourPack.title || ''} />
            
            <label className="text-start mt-2">Package Cost</label>
            <input type="number" {...register("tourprice")} value={packagePrice || ''} />

            <label className="text-start mt-2">Tour Date</label>
            <input type="date"  {...register("date")} value={tourPack.tour_date || ''} />


            <label className="text-start mt-2">Total Payable (Price+15% vat)</label>
            <input type="number"  {...register("totalprice")} value={totalCost || ''} />

            
            </Col>

        </Row>
        <input className="mt-4 btn btn-danger px-5"  type="submit" />

        </form>
            
        </div>
    );
};

export default Booking;