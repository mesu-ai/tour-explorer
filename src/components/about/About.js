import React from 'react';
import { Col, Row } from 'react-bootstrap';
import about from '../../image/about.png';
import './About.css';

const About = () => {
    return (

        // Heart-Care About information
        <Row style={{height:'',margin:'120px 0px'}} className="row row-cols-lg-2 row-cols-md-2 row-cols-1 d-flex justify-content-between align-items-center container mx-auto">
          <Col >
              <img className="img-fluid" src={about} alt="" />
          
          </Col>
          <Col >
            <h1 className="about-text"> 
                <span className="text-danger fw-bold ">Trusted care,</span> <br />
                with HeartCare
            </h1>
            <p>We aim to make it easier and more convenient for you to get the help you need from specialist doctors, and consultants.We support 24/7 in any emergency. We are commited to your healthcare.</p>
          
          
          </Col>
        </Row>
    );
};

export default About;