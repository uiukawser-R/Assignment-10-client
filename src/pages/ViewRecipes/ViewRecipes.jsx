import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ViewRecipes = () => {
    const { id } = useParams();

    const [chef, setChef] = useState([]);
    const [cData, setCdata] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                const selectedData = data.find(a => a.id == id)
                setCdata(selectedData);
            })


    }, [])
    // console.log(cData);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                const recipes = data.find(c => c.id == id)
                setChef(recipes?.recipes)
            })
    }, [])
    console.log(chef);
    return (
        <Container>
            <div className='mt-5 d-flex gap-5'>
                <div>
                    <img src={cData.picture} alt="" />
                </div>
                <div>
                    <h3>{cData.name}</h3>
                    <p><span className='text-danger fw-bold'>Bio: </span>Giovanni Rossi is a veteran chef with over 12 years of experience in the Italian culinary world. He specializes in traditional dishes from various regions of Italy, and has a keen eye for presentation. He is known for his attention to detail and passion for his craft.</p>
                    <p>Year of exprience: <span className='text-danger'>{cData.experience}</span></p>
                    <p>Number of recipes: <span className='text-danger'>{cData.number_of_recipes}</span> </p>
                    <p>Total likes: <span className='text-danger'>{cData.number_of_likes}</span></p>
                </div>
            </div>
            <div>
                <h1 className='text-center'>Chefs Recipes</h1>
                <div className="container">
                    <div className='row'>
                        {
                            chef.map((x, i) => (
                                <div key={i} className="col-sm-4 mb-2">
                                    <Recipe recipe={x}
                                    ></Recipe>
                                </div>
                            ))
                            // chefs.map((c,i)=>

                        }
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default ViewRecipes;