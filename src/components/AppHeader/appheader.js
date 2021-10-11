import React from "react";
import "./appheader.scss";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/images/icon.png";

const AppHeader = () => (
  <Navbar className="nav-bar" expand="md" collapseOnSelect>
    <Container fluid>
      <Navbar.Brand className="nav-bar-logo" as={Link} to="/">
        tableservice
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="nav-buttons ml-auto">
          <Nav.Link as={Link} to="/our-approach">
            Our Approach
          </Nav.Link>
          <Nav.Link as={Link} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/how-it-works">
            How It Works
          </Nav.Link>
          <Nav.Link as={Link} to="/pricing">
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/help">
            Help
          </Nav.Link>

          <Nav.Link eventKey={2} as={Link} to="/pilot" className="login-button">
            Join Now
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            as={Link}
            to="/pilot"
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
