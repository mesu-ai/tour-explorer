import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useSelectedBooking from '../../../hooks/useSelectedBooking';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const UpdateBooking = () => {
    
    const {id}= useParams();
    const [bookPackage,setBookPackage]=useSelectedBooking(id);
    const {user}=useAuth();

    const { register, handleSubmit,reset } = useForm();


    
    const changeAge=(e)=>{
        const updateAge=e.target.value;
        const updateBook={...bookPackage};
        updateBook.age=updateAge;

        setBookPackage(updateBook);
        
    }
    const changePhone=(e)=>{
        const updatePhone=e.target.value;
        const updateBook={...bookPackage};
        updateBook.phone=updatePhone;

        setBookPackage(updateBook);
        
    }
    const changeTour=(e)=>{
        const updateTour=e.target.value;
        const updateBook={...bookPackage};
        updateBook.tourpack=updateTour;

        setBookPackage(updateBook);
        
    }
    const changePrice=(e)=>{
        const updatePrice=e.target.value;
        const updateBook={...bookPackage};
        updateBook.tourprice=updatePrice;

        setBookPackage(updateBook);
        
    }
    const changeDate=(e)=>{
        const updateDate=e.target.value;
        const updateBook={...bookPackage};
        updateBook.date=updateDate;

        setBookPackage(updateBook);
        
    }
    const changeTotal=(e)=>{
        const updateTotal=e.target.value;
        const updateBook={...bookPackage};
        updateBook.totalprice=updateTotal;

        setBookPackage(updateBook);
        
    }

    const url=`http://localhost:5000/booking/${id}`;

    // total booking update
    const onSubmit = data =>{
        console.log(data);
        axios.put(url,bookPackage)
        .then(result=>{
                alert('Update successfully');
              //  console.log(data);
                reset();
            
        })
    }

   
    return (

        

        <div className="container  my-5">

        <h3 className="text-danger fw-bold my-5">Update Booking Information</h3>

    

       <form className="  mx-auto booking-form" onSubmit={handleSubmit(onSubmit)}>

        <Row className="mx-auto row-cols-lg-2 row-cols-md-2 row-cols-1 g-5">
            
            <Col className="mx-auto d-flex flex-column justify-content-center">
            
            <h3>User Information</h3>
            <label className="text-start mt-2 ">Name</label>
            <input className="bg-secondary text-light" {...register("name")} readOnly value={user.displayName || ''} />

            <label className="text-start mt-2">Email</label>
            <input className="bg-secondary text-light" type="email" {...register("email")} readOnly  value={user.email || ''} />

            <label className="text-start mt-2">Age</label>
            <input type="number" {...register("age")} onChange={changeAge} value={bookPackage.age || ''} />


            <label className="text-start mt-2">Phone No</label>
            <input type="number" {...register("phone", {required:true})} onChange={changePhone} value={bookPackage.phone || ''} />

            
            
            </Col>


            <Col className="mx-auto d-flex flex-column justify-content-center ">
            
            <h3>Tour Information</h3>

            <label className="text-start mt-2">Tour Package</label>
            <input className="text-capitalize fw-bold" {...register("tourpack")} onChange={changeTour} value={bookPackage.tourpack || ''} />
            
            <label className="text-start mt-2">Package Cost</label>
            <input type="number" {...register("tourprice")} onChange={changePrice} value={bookPackage.tourprice || ''} />

            <label className="text-start mt-2">Tour Date</label>
            <input type="date"  {...register("date")} onChange={changeDate} value={bookPackage.date || ''} />


            <label className="text-start mt-2">Total Payable (Price+15% vat)</label>
            <input type="number"  {...register("totalprice")} onChange={changeTotal} value={bookPackage.totalprice || ''} />

            
            </Col>

        </Row>
        <input className="mt-4 btn btn-danger px-5"  type="submit" />

        </form>
            
        </div>
        
        
    );
};

export default UpdateBooking;