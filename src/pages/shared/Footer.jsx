import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 p-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>“Welcome to Restoran” is a common greeting that customers receive when entering a restaurant, typically followed by a friendly welcome and an invitation to be seated.</p>
          </Col>
          <Col md={4}>
            <h5>LEGAL</h5>
            <p>
            <span><a href="">Terms of use</a></span>
              <br />
              <span><a href="">Privacy policy</a></span>
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>
              123 Restaurant Street
              <br />
              City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@restaurant.com
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
