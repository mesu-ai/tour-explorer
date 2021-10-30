import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import googlelogo from '../../../images/google.png';
import useFirebase from '../../../hooks/useFirebase';


//const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Login = () => {
    const {signInUsingGoogle} = useFirebase();

    const { register, handleSubmit,reset, formState: { errors }}=useForm();
   
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();


      };

          
    return (
        <div className="form-container my-5">
      

            <form className="my-5 d-flex flex-column w-50 mx-auto form-field" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="fw-bold">Please Login</h3>
            
            
            <input {...register("email",{ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , required: true })} placeholder="Email" />
            {errors.email && "⚠ Email is required"}

            <input type="password" {...register("password",{ required: true })} placeholder="Password"/>
            {errors.password && "⚠ Password is required"}
            <input className="btn btn-primary" type="submit" value="Login" />
            </form>
            
            <Link to='/register'>
            <p>Have No Account? <span className="fw-bold">Register Now...</span> </p>
            </Link>

            <h4 className="text-danger">or signin with</h4>

            <img onClick={signInUsingGoogle} src={googlelogo} alt="" height="35" width="35" />


            



        </div>
       
                
        
    );
};

export default Login;