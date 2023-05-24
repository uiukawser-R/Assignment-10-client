import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    // console.log(chef);
    const {id, name,experience,picture,number_of_recipes,number_of_likes } = chef;
    return (
        <Card >
            <Card.Img className='h-150' variant="top" src={picture} />
            
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Year of exprience: {experience}</p>
                <p>Number of recipes:{number_of_recipes} </p>
                <p>Total likes: {number_of_likes}</p>
                <Link to={`/recipe/${id}`}> <Button variant="warning">View Recipe</Button></Link>
                
            </Card.Body>
        </Card>
    );
};

export default Chef;