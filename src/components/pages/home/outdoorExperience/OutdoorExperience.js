import React from 'react';
import './OutdoorExperience.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import img1 from '../../../../images/experience1.jpg';
import img2 from '../../../../images/experience2.jpg';
import img3 from '../../../../images/experience3.jpg';

const OutdoorExperience = () => {
    return (
        <div style={{backgroundColor:'ghostwhite'}} className='py-5'>
            <h3 className="fs-2 fw-bold">Outdoor Experience</h3>
            
            <Carousel className='container shadow-lg mt-5 px-0 border border-dark'>
            <Carousel.Item>

                <Row className='bg-light '>
                    <Col className='carousel-bg p-3'>
                    <h4 className='mt-4'>First slide label</h4>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Carousel.Caption className=''>
                    </Carousel.Caption>
                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>

                <Row className='bg-light '>
                    <Col className='carousel-bg p-3'>
                    
                    <h4 className='mt-4'>First slide label</h4>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    
                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>

                <Row className='bg-light'>
                    <Col className='carousel-bg p-3'>
                    <h4 className='mt-4'>First slide label</h4>
                    <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default OutdoorExperience;