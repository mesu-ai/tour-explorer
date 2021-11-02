import React from 'react';
import '../ManageTour.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';


const AddTourPackage = () => {
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
 
   const history= useHistory();
    const onSubmit = data =>{

    const url='https://warm-journey-25318.herokuapp.com/tourpackages';
    axios.post(url,data)
    .then(result=>{
        console.log(result.data);
        if(result.data.insertedId){

            alert('Package Inserted Successfully !')
            const redirec_url='/';
            history.push(redirec_url);

            // console.log(data);
            reset();
        }

    })




  }
    return (
        <div className="my-5">
            <h3 className="">Add Existing Tour Package</h3>
            <form className="package-form  d-flex flex-column  mx-auto shadow-lg p-5 rounded-3" onSubmit={handleSubmit(onSubmit)}>

            <input className="text-uppercase p-2" {...register("title", { required: true})} placeholder="Package Title" />
            {errors.title?.type === 'required' && <span className="text-danger fw-bold"> * Title is required</span>}

            <input className="p-2" type="number" {...register("price", { required:true})} placeholder="Tour Package Cost" />
            {errors.price && <span className="text-danger fw-bold"> * Cost is required</span> }

            <input className="p-2 text-capitalize" {...register("location", { required: true})} placeholder="Tour Place" />
            {errors.location && <span className="text-danger fw-bold"> * Tour Place is required</span>}

            <input className="p-2" type='text' {...register("tour_duration", { required:true})} placeholder="Duration" />
            {errors.tour_duration && <span className="text-danger fw-bold"> * Duration is required</span> }

            <input className="p-2" type="date" {...register("tour_date", { required:true})} placeholder="Possible Date of Travel" />
            {errors.tour_date && <span className="text-danger fw-bold"> * Tour Date is required</span> }

            <input className="p-2 text-capitalize" {...register("existing_site", { required: true})} placeholder="Existing Site" />
            {errors.existing_site && <span className="text-danger fw-bold"> * Existing Site is required</span>}
          

            <input className="p-2 text-capitalize" {...register("package_includes", { required: true})} placeholder="Package Includes" />
            {errors.package_includes && <span className="text-danger fw-bold"> * Package Includes is required</span>}

            <input className="p-2" {...register("img", { required: true})} placeholder="Image URL" />
            {errors.img && <span className="text-danger fw-bold"> * Tour Cover Image is required</span>}

            <textarea {...register("description", { required: true})}   rows="5" placeholder="Tour Details"></textarea>
            {errors.description && <span className="text-danger fw-bold"> * Tour Details is required</span>}


            <input className="p-2" {...register("important_notes")} placeholder="Tour Tips" />
            

            

            <input className="btn text-light btn-dark btn-outline-danger mt-4 p-2" type="submit" value="Add Package" />
            </form>

            
            
        </div>
    );
};

export default AddTourPackage;