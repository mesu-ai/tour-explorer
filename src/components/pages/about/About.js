import React from 'react';
import { Col, Row } from 'react-bootstrap';
import about from '../../../images/about.jpg';
import './About.css';


const About = () => {
    return (

        // Tour Explorer About information
        <div className='container'>
        <Row style={{height:'',margin:'120px 0px'}} className="row row-cols-lg-2 row-cols-md-2 row-cols-1 d-flex justify-content-between align-items-center mx-auto g-5">
          <Col >
              <img className="img-fluid img-thumbnail btn-outline-warning shadow-lg" src={about} alt="" />
          
          </Col>
          <Col >
            <h3 className="about-text mb-3"> 
                <span className="text-danger fw-bold ">Trusted Tour,</span> <br />
                & Holiday Planner
            </h3>


            <p style={{textAlign:'justify'}}>Tour guides work in the travel industry, giving guided tours to groups of visitors. They are experts on the history of the location and offer their tour groups interesting or enlightening information about points of interest at nature attractions, historic sites, museums, scenic locations, and other travel destinations. Guides may give walking tours, bus tours, or even lead river tours on a boat. Often hired by visitors' bureaus or travel companies, tour guides are typically residents of the region in which they give tours.</p>
          
          
          </Col>
        </Row>
        </div>
    );
};

export default About;