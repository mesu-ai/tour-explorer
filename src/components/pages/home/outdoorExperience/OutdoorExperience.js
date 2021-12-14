import React from 'react';
import './OutdoorExperience.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import img1 from '../../../../images/experience1.jpg';
import img2 from '../../../../images/experience2.jpg';
import img3 from '../../../../images/experience3.jpg';

const OutdoorExperience = () => {
    return (
        
        <div style={{backgroundColor:'ghostwhite'}} className='py-5'>
            <h3 className="fs-2 fw-bold ">Outdoor Experience</h3>
            
            <Carousel className='container shadow-lg mt-5 px-0 border border-dark'>
            <Carousel.Item>

                <Row className='bg-light d-flex flex-lg-row flex-md-row flex-column-reverse'>
                    <Col className='carousel-bg p-3 caro-text'>
                    <h4 className=' mt-0 mt-lg-4 text-info fw-bold text-capitalize'>First slide label</h4>
                    <p className='text-dark d-lg-flex d-md-flex d-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    
                    <button  type="button" className="btn btn-outline-success card-btn mt-2 mt-lg-4 fw-bold">Read More<i className="fas fa-angle-double-right ms-2"></i></button>

                    <Carousel.Caption className=''>
                    </Carousel.Caption>
                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100 small-screen"
                        src={img3}
                        alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>

                <Row className='bg-light d-flex flex-lg-row flex-md-row flex-column-reverse'>
                    <Col className='carousel-bg p-3 caro-text'>
                    
                    <h4 className='mt-0 mt-lg-4 text-info fw-bold text-capitalize'>First slide label</h4>
                    <p className='text-dark d-lg-flex d-md-flex d-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    
                    <button  type="button" className="btn btn-outline-success card-btn mt-2 mt-lg-4 fw-bold">Read More<i className="fas fa-angle-double-right ms-2"></i></button>
                    
                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100 small-screen"
                        src={img2}
                        alt="First slide"
                        />
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>

                <Row className='bg-light d-flex flex-lg-row flex-md-row flex-column-reverse'>
                    <Col className='carousel-bg p-3 caro-text'>
                    <h4 className='mt-0 mt-lg-4 text-info fw-bold text-capitalize'>First slide label</h4>
                    <p className='text-dark d-lg-flex d-md-flex d-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae saepe aliquam ducimus pariatur enim neque cum ab molestias repudiandae?</p>
                    
                    <button  type="button" className="btn btn-outline-success card-btn mt-2 mt-lg-4 fw-bold">Read More<i className="fas fa-angle-double-right ms-2"></i></button>

                    </Col>
                    <Col className='px-0'>
                        <img
                        className="d-block w-100 small-screen"
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