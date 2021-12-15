import React from 'react';
import { Row } from 'react-bootstrap';
import ClientReviewCard from './ClientReviewCard';
import reviewbg from '../../../../images/reviewbg.png';


const bg={
    background:`url(${reviewbg})`,
    backgroundRepeat:'no-repeat',
    // backgroundColor:'rgba(223, 219, 228, 0.911)', 
    // backgroundBlendMode:'screen',
    objectFit: 'cover',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingBottom:'80px'

}


const clientsreview=[
    {
        name:'Ahsan Habib',
        city:'Dhanmondi',
        country:'Bangladesh',
        image:'https://i.ibb.co/KmH4rB0/closeup-happy-pretty-indian-business-woman-1262-2258.jpg',
        comment:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
     
     },
    {
        name:'Karim Parvez',
        city:'Sylet',
        country:'Bangladesh',
        image:'https://i.ibb.co/KmH4rB0/closeup-happy-pretty-indian-business-woman-1262-2258.jpg',
        comment:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
     
     },
    {
        name:'Kamal Hossen',
        city:'Chittagong',
        country:'Bangladesh',
        image:'https://i.ibb.co/KmH4rB0/closeup-happy-pretty-indian-business-woman-1262-2258.jpg',
        comment:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
     
     },
    // {
    //     name:'Fahim Asraf',
    //     city:'Nator',
    //     country:'Bangladesh',
    //     image:'https://i.ibb.co/KmH4rB0/closeup-happy-pretty-indian-business-woman-1262-2258.jpg',
    //     comment:''
     
    //  }

]

const ClientReview = () => {
    return (
        <div style={bg} className='my-4'>

          <h3 className="fs-2 pt-4 fw-bold">Customer Review</h3>
           
           <Row xs={1} md={2} lg={3} className="g-4 container mx-auto mt-4">

            {clientsreview.map(review=><ClientReviewCard key={Math.random()} review={review}></ClientReviewCard>)}
            </Row>

            
            
        </div>
    );
};

export default ClientReview;