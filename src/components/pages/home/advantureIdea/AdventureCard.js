import React, { useEffect } from 'react';
import './Adventure.css';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AdventureCard = ({idea}) => {
    const {name,image} = idea;

    useEffect(()=>{
      AOS.init({
          
      });
      
  },[]);
    return (
        

            <Col>
            <Card data-aos="zoom-in-up" className='h-100 p-2 adventure-container'>
            <Card.Img variant="top" src={image} style={{width:'180px',height:'150px'}} className='rounded-circle mx-auto'/>
            <Card.Body className='text-overlap mt-1'>
            
            <Card.Title style={{color:'green'}}>{name}</Card.Title>

            <Card.Text style={{textAlign:'justify'}}>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
            </Card.Text>

            <div className="card-overlay d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-danger card-btn fw-bold">Read More <i className="fas fa-angle-double-right ms-2"></i></button>
          </div>
            
            </Card.Body>
            </Card>

            
            </Col>
          
    );
};

export default AdventureCard;