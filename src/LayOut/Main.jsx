import React from 'react';
import Footer from '../pages/shared/Footer';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;