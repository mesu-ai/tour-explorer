import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientReviewCard = ({review}) => {
    const {name,image,city,country,comment}=review;
   
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);
    return (
        <Col>
            <Card data-aos="zoom-in-up" style={{backgroundColor:'rgba(255, 255, 255, 0.425)'}} className='h-100'>

               <Card.Text style={{textAlign:'justify'}} className='px-3 pt-2'>
                   {comment}
                    
                </Card.Text>
                
                <Card.Body className='d-flex justify-content-start align-items-center'>

                <Card.Img  src={image} className='rounded-circle' style={{width:'75px',height:'75px'}}  />

                <div style={{textAlign:'justify'}} className='ms-3'>
                <Card.Title className='text-info'>{name}</Card.Title>
                <Card.Text>
                    {city},{country}
                </Card.Text>
                </div>
                
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ClientReviewCard;