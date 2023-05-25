import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContex } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function NavigationBar() {
  const { user,logOut } = useContext(AuthContex)

  const handlelogOut=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <Navbar bg="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="text-warning fs-1 fw-bold ">cafe chef's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/menu" className="text-white">Menu</Nav.Link>
            <Nav.Link href="#services" className="text-white">Blog</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link className="text-white">
             <Tippy content={user.displayName}>
             <a className='' href="">
                <img style={{ height: '50px', width: '50px' }} className=' text-center rounded-circle' src={user.photoURL} alt="" />
              </a>
             </Tippy>
            </Nav.Link>}
           <Nav.Link>
             {user? <Button onClick={handlelogOut} variant="warning">LogOut</Button>:
              <Link to="/login">
              <Button variant="warning">Login</Button></Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;