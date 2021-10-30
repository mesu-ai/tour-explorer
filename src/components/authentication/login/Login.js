import React, { useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import googlelogo from '../../../images/google.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';


//const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const auth = getAuth();
    const [error,setError]= useState('');

    const { register, handleSubmit,reset, formState: { errors }}=useForm();
   
    
      const onSubmit = (data) => {
        const email=data.email;
        const password=data.password;

        handleUserLogin(email,password);
        reset();


      };

      const handleUserLogin=(email,password)=>{
        
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            // Signed in 
            const user = result.user;
            reset();
            // ...
          })
          .catch((error) => {  
            setError(error.message);
          });

      }

          
    return (
        <div className="form-container my-5">
      

            <form className="my-5 d-flex flex-column w-50 mx-auto form-field" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="fw-bold">Please Login</h3>
            
            
            <input {...register("email",{ pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ , required: true })} placeholder="Email" />
            {errors.email && "⚠ Email is required"}

            <input type="password" {...register("password",{ required: true })} placeholder="Password"/>
            {errors.password && "⚠ Password is required"}

            <p className="text-danger fw-bold">{error}</p>

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