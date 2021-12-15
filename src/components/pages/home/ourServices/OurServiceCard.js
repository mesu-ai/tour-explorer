import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurServiceCard = ({service}) => {
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);


    const {icon,serviceName}= service;
    return (
        
    
        <Col>
            <Card data-aos="zoom-in-up" className="h-100 p-3 shadow-lg ">
                <Card.Img  variant="top" src={icon}  height="100" />
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold">{serviceName}</Card.Title>
                <Card.Text style={{textAlign:'justify'}} className="">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default OurServiceCard;