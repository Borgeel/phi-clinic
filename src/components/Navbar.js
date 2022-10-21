import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../assets/images/logo.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="130rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/medical-aesthetics">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Medical Aesthetics
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dental-aesthetics">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Dental Aesthetics
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/hair-transplantation">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Hair Transplantation
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stem-cell-therapy">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Stem Cell Therapy
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sexual-wellness">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Sexual Wellness
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="contact">
              <Nav.Link className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1">
                Contact Us
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
