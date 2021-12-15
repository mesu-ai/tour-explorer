import React from 'react';
import { Container, Row } from 'react-bootstrap';
import tourpackage from '../../../../images/box-open-solid.svg';
import accessory from '../../../../images/shopping-basket-solid.svg';
import tourguide from '../../../../images/flag-checkered-solid.svg';

import OurServiceCard from './OurServiceCard';


const services=[
    {   'icon':tourpackage,
        'serviceName':'Tour Package',
        'sortDetails':''
    },
    
    {   'icon':accessory,
        'serviceName':'Tour Accessories',
        'sortDetails':''
    },
    {   'icon':tourguide,
        'serviceName':'Tour Guide',
        'sortDetails':''
    },
]

const OurServices = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7' }}>
            <Container className="py-5">
            
            <h3 className="mb-3 fs-2 fw-bold">Our Services</h3>
            
        
            <Row xs={1} md={2} lg={3} className="g-4 my-1 ">
            {
            services.map(service=><OurServiceCard service={service} key={Math.random()}></OurServiceCard>)
            }
  
           </Row>
           <hr style={{height:'2px'}} />
           
           </Container>
        </div>
    );
};

export default OurServices;