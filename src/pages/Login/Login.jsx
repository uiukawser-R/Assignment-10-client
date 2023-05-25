import React, { useContext } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { FaGithubSquare, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signIn,googleProvider,githubProvider,loading}=useContext(AuthContex);
    const auth =getAuth(app);

    const navigate=useNavigate();

    const location=useLocation();

    if(loading){
        return <h1 className='text-center fs-1 fw-bold text-success'>L<Spinner animation="border" variant="danger" />ding.....</h1>
    }

    // console.log('login page location',location);
    const from =location.state?.from?.pathname || '/'


    const handleSignIn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})

        }).catch(error=>{
            console.log(error);
        })
    }

    
  const handleSignInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        const googleUser=result.user;
        console.log(googleUser);
        navigate(from, {replace: true})

    }).catch(error=>{
        console.log(error);
    })
  }




  const handleSignInWithGithub=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        const githubUser=result.user;
        console.log(githubUser);
        navigate(from, {replace: true})

    }).catch(error=>{
        console.log(error);
    })
  }




    return (
        <Container className='mt-5 w-25 mx-auto'>


            <h3>Please login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    login
                </Button>
                <br />
                <Form.Text className="text-success">Dont have an Account<Link to="/register">Register</Link></Form.Text>
                <Form.Text className="text-success"></Form.Text>
                <Form.Text className="text-danger"> </Form.Text>
            </Form>
            <div>
                <Button className='mt-3 mb-3' onClick={handleSignInWithGoogle}><FaGoogle /> signin with google</Button>
                <br />
                <Button onClick={handleSignInWithGithub}><FaGithubSquare></FaGithubSquare> signin with github</Button>
            </div>

        </Container>
    );
};

export default Login;