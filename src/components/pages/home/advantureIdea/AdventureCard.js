import React from 'react';
import './Adventure.css';
import { Card, Col } from 'react-bootstrap';


const AdventureCard = ({idea}) => {
    const {name,image} = idea;
    return (
        

            <Col>
            <Card className='h-100 p-2 adventure-container'>
            <Card.Img variant="top" src={image} style={{width:'180px',height:'150px'}} className='rounded-circle mx-auto'/>
            <Card.Body>
            <Card.Title style={{color:'green'}}>{name}</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
          
    );
};

export default AdventureCard;