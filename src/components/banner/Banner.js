import React from 'react';
import './Banner.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cover from '../../images/banner.jpg';
import useSelectedPackage from '../../hooks/useSelectedPackage';




const Banner = () => {
    const hotToreId='617dcd1c1dc3dc4f5b8edd12';
    const [tourPack,setTourPack] = useSelectedPackage(hotToreId);
    console.log(tourPack);




    return (

    <div className="banner-bg">

     <Row style={{height:'',padding:'110px 0px'}} className="row row-cols-lg-2  row-cols-1 d-flex justify-content-between align-items-center container mx-auto px-0">
        
      <Col className="text-start" >
        <h1 className="banner-text"> 
            <span className="text-danger text-capitalize">Grand  {tourPack?.title},
           </span> <br />
           hurry up !
        </h1>
        <p className="fs-5"></p>
        <p className="text-primary fs-3 fw-bold mb-0"><i>Only {tourPack.price} TK</i></p>
        <p className="my-0 fw-bold fs-5">3 Days 2 Night</p>

        <h3 className="mx-0 my-0 ">31st night celebration</h3>
        <p className="my-3">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
        <span className="fw-bold ms-2">(5k)</span> 
        
        
        </p>
        
        <Link to={`booking/${tourPack?._id}`}>
        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 me-2">Book Now</button>
        </Link>
        
        <Link to='/services'>
        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 ms-2">View Our Services</button>
        </Link>
      
      </Col>

      <Col>
          <img className="img-fluid img-thumbnail btn-outline-danger" src={cover}  alt="" />
      
      
      </Col>
       </Row>

       </div>

    );
};

export default Banner;