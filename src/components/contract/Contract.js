import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Contract.css';

const Contract = () => {
    return (

        //Contract and Service Information
        <Row className="row row-cols-lg-4 row-cols-md-2 row-cols-1 my-5 container mx-auto">

            <Col>
                <Card className="h-100 p-3 card-art">
                <p><i className="fas fa-map-marker-alt text-danger fa-4x"></i></p>
                <h3>ADDRESS</h3>
                <p>27th Bongobondu Avenue <br /> Dhanmondi, Dhaka</p>
                </Card>
            </Col>

            <Col>
                <Card className="h-100 p-3 card-art">
                <p><i className="fas fa-mobile-alt text-danger fa-4x"></i></p>
                <h3>CALL US</h3>
                <p>0-800-2336-7820 <br /> 0-800-2344-6477</p>
                </Card>
            </Col>

            <Col>
                <Card className="h-100 p-3 card-art">
                <p><i className="fas fa-envelope-open-text text-danger fa-4x"></i></p>
                <h3>WRITE TO US</h3>
                <p>office@tourexplorer.com <br /> book@tourexplorer.com</p>
                </Card>
            </Col>

            <Col>
                <Card className="h-100 p-3 card-art">
                <p><i className="far fa-calendar-alt text-danger fa-4x"></i></p>
                <h3>BOOK AN TOUR PACKAGE</h3>
                <p>Click here to book an <br />Holiday Package</p>
                 <Link to='/services'><button className="btn btn-warning btn-outline-dark">Holiday Package</button></Link>
                </Card>
            </Col>



        </Row>
       
    );
};

export default Contract;