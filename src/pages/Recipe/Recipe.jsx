import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const [isDisable, setisDsable]=useState(false)
    console.log(recipe);
    const {name,ingredients,cooking_method,rating,img}=recipe;

    const handleDisableButton=()=>{
        setisDsable(!isDisable);
        toast.success("Successfuly added to Favorite!",{
            position:"top-center"
        });
        
    }

    return (
        <Card >
        <Card.Img  variant="top" src={img}/>
        
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h5>Ingredients:</h5>
            <p>{ingredients} </p>
            <h5>Cooking Method:</h5>
            <p>{cooking_method}</p>
            
            <h5>Rating: <small><Rating style={{ maxWidth: 250 }} value={rating} readOnly /></small>{rating}</h5>
            <Link to=""> <Button variant="danger" disabled={isDisable} onClick={()=>handleDisableButton()}>	FAVORITE</Button></Link>
            <Link to=""> <Button variant="warning" >View Recipe</Button></Link>
            <ToastContainer />
        </Card.Body>
    </Card>
    );
};

export default Recipe;