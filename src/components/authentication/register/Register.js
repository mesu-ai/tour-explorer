import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link,useHistory,useParams } from 'react-router-dom';
import googlelogo from '../../../images/google.png';
import { getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
   const {user, signInUsingGoogle}= useAuth();
 
    const auth = getAuth();
    const [error,setError]=useState('');
    const [isspinner,setSpinner]=useState(false);
    

    const history= useHistory();
    const location=useParams();
    const redirect_uri=location.state?.from || '/home';
  


    const { register, handleSubmit,reset, formState: { errors }}=useForm();
    

    if(user.email){
      // const redi_uri='/home';
      history.push(redirect_uri);
    }




      const onSubmit = (data) => {
       const name= data.name;
       const email=data.email;
       const password=data.password;

       
       handleUserRegister(name,email,password);

      }

      const handleUserRegister=(name,email,password)=>{
         
        setSpinner(true);
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {

            setUserName(name);
            const user = result.user;           
            reset();
            setError('');
            setSpinner(false);
            history.push(redirect_uri);
 
          })
          .catch((error) => {
            
            setError(error.message);
            
          });

      }

      const setUserName=(name)=>{

        updateProfile(auth.currentUser, {
          displayName:name
        }).then(() => {
          // Profile updated!
          window.location.reload();
          
        }).catch((error) => {        
          setError(error.message);

        });
     }

     

      

    return (
        
           
        <>

          
        { isspinner? 
        <Spinner className="mt-5" animation="border" variant="primary" />:

        <div className="form-container my-5">

            <form className="my-5 d-flex flex-column w-50 mx-auto form-field" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="fw-bold">Please Register</h3>

            <input {...register("name",{ pattern: /^[a-zA-Z ]{2,30}$/ , required: true })} placeholder="Name" />
            {errors.name && "⚠  Name is required"}

            <input {...register("email",{ pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ , required: true })} placeholder="Email" />
            {errors.email && "⚠ Email is required"}

            <input type="password" {...register("password",{ required: true })} placeholder="Password"/>
            {errors.password && "⚠ Password is required"}

            <p className="text-danger fw-bold">{error}</p>
            <input className="btn btn-primary" type="submit" value="Register" />
            </form>

            <Link to='/login'>
            <p>Already Have An Account? <span className="fw-bold">Sign In Now...</span></p>
            </Link>
            
            <h4 className="text-danger">or signin with</h4>
            <img onClick={signInUsingGoogle} src={googlelogo} alt="" height="35" width="35" />

        </div>
        }



        </>
            
            
    );
};

export default Register;