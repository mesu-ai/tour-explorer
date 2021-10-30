import React from 'react';
import '../ManageTour.css';
import { useForm } from "react-hook-form";


const AddTourPackage = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data =>{

    console.log(data);




  }
    return (
        <div className="my-5">
            <h3 className="">Add Existing Tour Package</h3>
            <form className="package-form w-50 d-flex flex-column  mx-auto shadow-lg p-5 rounded-3" onSubmit={handleSubmit(onSubmit)}>

            <input className="text-uppercase p-2" {...register("title", { required: true})} placeholder="Package Title" />
            {errors.title?.type === 'required' && <span className="text-danger fw-bold"> * Title is required</span>}

            <input className="p-2" {...register("location", { required: true})} placeholder="Tour Place" />
            {errors.location && <span className="text-danger fw-bold"> * Tour Place is required</span>}

            <input className="p-2" {...register("existing_site", { required: true})} placeholder="Existing Site" />
            {errors.existing_site && <span className="text-danger fw-bold"> * Existing Site is required</span>}

            <input className="p-2" type="number" {...register("price", { required:true})} placeholder="Tour Package Cost" />
            {errors.price && <span className="text-danger fw-bold"> * Cost is required</span> }

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