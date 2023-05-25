import React, { useContext } from 'react';
import Footer from '../pages/shared/Footer';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const {loading}=useContext(AuthContex);
    if(loading){
        return <h1 className='text-center fs-1 fw-bold text-success'>L<Spinner animation="border" variant="danger" />ding.....</h1>
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;