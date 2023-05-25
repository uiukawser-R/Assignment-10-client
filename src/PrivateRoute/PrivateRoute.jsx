import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContex);
const location=useLocation();
console.log(location);

if(loading){
    return <h1 className='text-center fs-1 fw-bold text-success'>L<Spinner animation="border" variant="danger" />ding.....</h1>
}

if(user){
    return children;
}

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;