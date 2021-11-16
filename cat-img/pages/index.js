
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button } from 'react-bootstrap'
import {location} from '../public/location.svg'
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
//require ('dotenv').config();


function app(){
  return(
    <div className='app'>
      <Navbar bg="main" varient='dark'
      expand="lg">
        <Navbar.Brand>
          <div className="img">
          <Image src='/logo.png' width={200} height={77}/>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className="right">
        <Nav>

          <NavDropdown title="Products">
            <NavDropdown.Item href="products/product 1">Free Tier</NavDropdown.Item>
            <NavDropdown.Item href="products/product 2">Premium</NavDropdown.Item>
            <NavDropdown.Item href="products/product 3">Ultimate</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About Us">
             <NavDropdown.Item href="About Us/ Background">Background</NavDropdown.Item>
            <NavDropdown.Item href="team">Meet The Team</NavDropdown.Item>
            <NavDropdown.Item href="About Us/Mission Statement">Mission and Vission</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="products">Careers</Nav.Link>
          <Nav.Link href="signup">Log in </Nav.Link>
          <Button ClassName="btn btn-outline-success" type="submit" href="signup">Log In
          </Button>
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
      <div className='content'>
        <h1>Welcome to WEZA</h1>
        <Image src="/location.svg" width={1000} height={500} alt=""/>
      </div>

      <div className='content2'>
        <h1>hello world</h1>
      </div>

      <div className='content'>
        <h1>More to get</h1>
      </div>


    </div>


  );
}
export default app;


