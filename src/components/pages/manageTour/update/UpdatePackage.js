import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useSelectedPackage from '../../../../hooks/useSelectedPackage';

const UpdatePackage = () => {
    const {id} = useParams();
    const [tourPack,setTourPack]=useSelectedPackage(id);
    


    const { register, handleSubmit,reset,formState: { errors } } = useForm();

    const titleChange=(e)=>{
        const updateTitle=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.title=updateTitle;

        setTourPack(updatedPackage);


    }
    const priceChange=(e)=>{
        const updatePrice=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.price=updatePrice;

        setTourPack(updatedPackage);

    }

    const locationChange=(e)=>{
        const updateLocation=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.location=updateLocation;

        setTourPack(updatedPackage);

    }

    const durationChange=(e)=>{
        const updateDuration=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.tour_duration=updateDuration;

        setTourPack(updatedPackage);

    }

    const dateChange=(e)=>{
        const updateDate=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.tour_date=updateDate;

        setTourPack(updatedPackage);

    }

    const existingChange=(e)=>{
        const updateExisting=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.existing_site=updateExisting;

        setTourPack(updatedPackage);

    }

    const includesChange=(e)=>{
        const updateIncludes=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.package_includes=updateIncludes;

        setTourPack(updatedPackage);

    }

    const imgChange=(e)=>{
        const updateImg=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.img=updateImg;

        setTourPack(updatedPackage);

    }
    const descriptionChange=(e)=>{
        const updateDescription=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.description=updateDescription;

        setTourPack(updatedPackage);

    }

    const tipsChange=(e)=>{
        const updateTips=e.target.value;
        const updatedPackage={...tourPack};
        updatedPackage.important_notes=updateTips;

        setTourPack(updatedPackage);

    }



    const url=`https://warm-journey-25318.herokuapp.com/tourpackages/${id}`;

    const onSubmit = data =>{
        axios.put(url,tourPack)
        .then(result=>{
                alert('Update successfully');
              //  console.log(data);
                reset();
            
        })
    }


    return (
        <div className="my-5">

        <h3 className="">Update Tour Package</h3>
        <form className="package-form  d-flex flex-column  mx-auto shadow-lg p-5 rounded-3" onSubmit={handleSubmit(onSubmit)}>

        <input className="text-uppercase p-2" {...register("title", { required: true})} onChange={titleChange} value={tourPack?.title || ''} placeholder="Package Title" />
        {errors.title?.type === 'required' && <span className="text-danger fw-bold"> * Title is required</span>}

        <input className="p-2" type="number" {...register("price", { required:true})} onChange={priceChange} value={tourPack?.price || ''} placeholder="Tour Package Cost" />
        {errors.price && <span className="text-danger fw-bold"> * Cost is required</span> }

        <input className="p-2 text-capitalize" {...register("location", { required: true})} onChange={locationChange} value={tourPack?.location || ''} placeholder="Tour Place" />
        {errors.location && <span className="text-danger fw-bold"> * Tour Place is required</span>}

        <input className="p-2" type='text' {...register("tour_duration", { required:true})} onChange={durationChange} value={tourPack?.tour_duration || ''} placeholder="Duration" />
        {errors.tour_duration && <span className="text-danger fw-bold"> * Duration is required</span> }

        <input className="p-2" type="date" {...register("tour_date", { required:true})} onChange={dateChange} value={tourPack?.tour_date || ''} placeholder="Possible Date of Travel" />
        {errors.tour_date && <span className="text-danger fw-bold"> * Tour Date is required</span> }

        <input className="p-2 text-capitalize" {...register("existing_site", { required: true})} onChange={existingChange} value={tourPack?.existing_site || ''} placeholder="Existing Site" />
        {errors.existing_site && <span className="text-danger fw-bold"> * Existing Site is required</span>}
      

        <input className="p-2 text-capitalize" {...register("package_includes", { required: true})} onChange={includesChange} value={tourPack?.package_includes || ''} placeholder="Package Includes" />
        {errors.package_includes && <span className="text-danger fw-bold"> * Package Includes is required</span>}

        <input className="p-2" {...register("img", { required: true})} onChange={imgChange} value={tourPack?.img || ''}  placeholder="Image URL" />
        {errors.img && <span className="text-danger fw-bold"> * Tour Cover Image is required</span>}

        <textarea {...register("description", { required: true})}   rows="5" onChange={descriptionChange} value={tourPack?.description || ''} placeholder="Tour Details"></textarea>
        {errors.description && <span className="text-danger fw-bold"> * Tour Details is required</span>}


        <input className="p-2" {...register("important_notes")} onChange={tipsChange} value={tourPack?.important_notes || ''} placeholder="Tour Tips" />
        

        

        <input className="btn text-light btn-dark btn-outline-danger mt-4 p-2 px-5" type="submit" value="Update Package" />
        </form>

        
        
    </div>
    );
};

export default UpdatePackage;