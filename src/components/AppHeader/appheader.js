import React from "react";
import "./appheader.scss";
import { Link } from "gatsby";
import logo from "../../assets/svg/logo1.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useStaticQuery, graphql } from "gatsby";

const AppHeader = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      allWpPage {
        nodes {
          title
          slug
          contentpage {
            navmenu
            navmenuitem
          }
        }
      }
    }
  `);
  const pages = data?.allWpPage?.nodes || [];
  return (
    <Navbar className="nav-bar" expand="lg" collapseOnSelect>
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
              Home
            </Nav.Link>
            {pages?.map(
              (page) =>
                page?.contentpage?.navmenu === "Yes" &&
                page?.contentpage?.navmenuitem && (
                  <Nav.Link as={Link} to={`/${page?.slug}`}>
                    {page?.contentpage?.navmenuitem}
                  </Nav.Link>
                )
            )}

            <Nav.Link eventKey={2} as={Link} to="/" className="login-button">
              Sign Up
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              as={Link}
              to="/"
              className="login-button--mobile"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
