import React from "react";
import "./appheader.scss";
import { Link } from "gatsby";
import logo from "../../assets/images/logo1.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const AppHeader = () => (
  <Navbar className="nav-bar" expand="md" collapseOnSelect>
    <Container fluid>
      <Navbar.Brand className="nav-bar-logo" as={Link} to="/">
        <img alt="tableservice" src={logo} className="image" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="nav-buttons ml-auto">
          <Nav.Link as={Link} to="/">
            Our Approach
          </Nav.Link>
          <Nav.Link as={Link} to="/content-page-1">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/content-page-2">
            How It Works
          </Nav.Link>
          <Nav.Link as={Link} to="/content-page-3">
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/content-page-4">
            Help
          </Nav.Link>

          <Nav.Link eventKey={2} as={Link} to="/" className="login-button">
            Join Now
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            as={Link}
            to="/"
            className="login-button--mobile"
          >
            Join Now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppHeader;
