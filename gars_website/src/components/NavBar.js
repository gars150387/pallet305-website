import React from "react"
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"


export const NavBarMain = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#">G.A.R.S</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/aboutMe">
              <Nav.Link href="">About Me</Nav.Link>
            </Link>
            <Link to="/certifications">
              <Nav.Link href="">Certifications</Nav.Link>
            </Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/resume">
              <Nav.Link href="#">Resume</Nav.Link>
            </Link>
            <Link to="/contact">            
            <Nav.Link eventKey={2} href="#">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}