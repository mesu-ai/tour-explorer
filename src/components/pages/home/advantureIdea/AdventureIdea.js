import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdventureCard from './AdventureCard';


const AdventureIdea = () => {
    const [ideas,setIdeas] = useState([]);
    useEffect(()=>{
        fetch('/ideas.json')
        .then(res=>res.json())
        .then(data=>setIdeas(data))
    },[ideas.json]);
    console.log(ideas);


    return (
        <div className='my-4 container'>
            
            <h3 className="fs-2 fw-bold">Adventure Idea</h3>
            
            <Row xs={1} md={3} lg={4} className="g-4 mx-auto">
                
                {
                    ideas.map(idea=><AdventureCard key={Math.random()} idea={idea}></AdventureCard>)

                }
           
            </Row>
            
        </div>
    );
};

export default AdventureIdea;