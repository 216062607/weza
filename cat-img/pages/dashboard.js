
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
      sticky='top'expand="lg">
        <Navbar.Brand>
          <img src=''/>
          Logo
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav className="right">

          <NavDropdown title="Products">
            <NavDropdown.Item href="products/product 1">Free Tier</NavDropdown.Item>
            <NavDropdown.Item href="products/product 2">Premium</NavDropdown.Item>
            <NavDropdown.Item href="products/product 3">Ultimate</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About Us">
             <NavDropdown.Item href="About Us/ Background">Background</NavDropdown.Item>
            <NavDropdown.Item href="About Us/ Meet The Team">Meet The Team</NavDropdown.Item>
            <NavDropdown.Item href="About Us/ Mission Statement">Mission and Vission</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="products">Careers</Nav.Link>
          <Nav.Link href="signup">Log in </Nav.Link>
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
      <div className='content'>
        <img src={location} alt=""/>
      </div>


    </div>


  );
}
export default app;


