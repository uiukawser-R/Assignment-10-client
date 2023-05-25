import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h1 className="text-center">Oops!</h1>
            <div className='d-flex justify-content-center'>
            <img  src="https://live.staticflickr.com/65535/52924947854_f8b22c5aa3_n.jpg" alt="" />
            </div>
            <p className="text-center">Something went wrong.</p>
            <div className="text-center">
              <Link to="/">
              <Button variant="primary" >
                Go Back
              </Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default ErrorPage;