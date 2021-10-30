import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import googlelogo from '../../../images/google.png';



const Register = () => {
    const {signInUsingGoogle} = useFirebase();


    const { register, handleSubmit,reset, formState: { errors }}=useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
      }

      

    return (
        
            <div className="form-container my-5">

            <form className="my-5 d-flex flex-column w-50 mx-auto form-field" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="fw-bold">Please Register</h3>

            <input {...register("name",{ pattern: /^[A-Za-z]+$/i , required: true })} placeholder="Name" />
            {errors.name && "⚠  Name is required"}

            <input {...register("email",{ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , required: true })} placeholder="Email" />
            {errors.email && "⚠ Email is required"}

            <input type="password" {...register("password",{ required: true })} placeholder="Password"/>
            {errors.password && "⚠ Password is required"}
            <input className="btn btn-primary" type="submit" value="Login" />
            </form>

            <Link to='/login'>
            <p>Already Have An Account? <span className="fw-bold">Sign In Now...</span></p>
            </Link>
            
            <h4 className="text-danger">or signin with</h4>
            <img onClick={signInUsingGoogle} src={googlelogo} alt="" height="35" width="35" />

           



           </div>
            
    );
};

export default Register;