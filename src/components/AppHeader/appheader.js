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
      footerData: allWpPage(filter: { title: { eq: "Footer" } }) {
        nodes {
          footer {
            headerbutton {
              link
              text
            }
          }
        }
      }
    }
  `);
  const pages = data?.allWpPage?.nodes || [];
  const footer = data?.footerData?.nodes[0]?.footer;
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

            {footer?.headerbutton?.text && footer?.headerbutton?.link && (
              <Nav.Link
                eventKey={2}
                as={Link}
                to={footer?.headerbutton?.link}
                className="login-button"
              >
                {footer?.headerbutton?.text}
              </Nav.Link>
            )}
            {footer?.headerbutton?.text && footer?.headerbutton?.link && (
              <Nav.Link
                eventKey={3}
                as={Link}
                to={footer?.headerbutton?.link}
                className="login-button--mobile"
              >
                {footer?.headerbutton?.text}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
