import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link className="text-decoration-none text-dark fw-semibold px-2 mx-1" to={'/'}>Home</Link>
      </li>
      <li>
        <Link className="text-decoration-none text-dark fw-semibold px-2 mx-1" to={'/blogs'}>Blogs</Link>
      </li>
      <li>
        <Link className="text-decoration-none text-dark fw-semibold px-2 mx-1" to={'/login'} >Login</Link>
      </li>
      <li>
        <Link className="text-decoration-none text-dark fw-semibold px-2 mx-1" to={'/register'}>Register</Link>
      </li>
    </>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="text-decoration-none text-dark fw-bold fs-4" to={'/'}>Modern blog</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                navItems
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
