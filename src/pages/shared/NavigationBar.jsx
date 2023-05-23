import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" className="sticky-top">
        <Container>
        <Navbar.Brand href="#home" className="text-white ">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="" className="text-white">Menu</Nav.Link>
          <Nav.Link href="#services" className="text-white">Blog</Nav.Link>
          <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="text-white">Login</Button>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavigationBar;