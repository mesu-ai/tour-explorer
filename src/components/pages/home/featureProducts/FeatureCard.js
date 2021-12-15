import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
// var Rating = require('react-rating');

const FeatureCard = ({product}) => {
  const {title,image,price,rating} = product;

    return (
        <Col className='mx-2'>
        <Card className='h-100 adventure-container border border-dark'>
            <div className='card-img-bg d-flex align-items-center' style={{height:'200px'}}>
            <Card.Img variant="top" src={image} style={{width:'180px',height:'150px'}} className=' mx-auto img-fluid'/>

            </div>
            
            <Card.Body className='text-overlap mt-1 p-2'>
            
            <Card.Title className='text-black'>{title}</Card.Title>

            <Card.Text style={{color:'green',fontWeight:'bold'}}>
             Price: ${price}
            </Card.Text>

            <Card.Footer className=''>
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"

                  />
                   
                 </Card.Footer>
                 
            

            <div className="card-overlay d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-danger card-btn fw-bold">Buy Now<i className="fas fa-angle-double-right ms-2"></i></button>
          </div>
            
            </Card.Body>
            </Card>
      </Col>
    );
};

export default FeatureCard;