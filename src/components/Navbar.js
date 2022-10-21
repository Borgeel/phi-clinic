import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/medical-aesthetics"
            >
              Medical Aesthetics
            </Nav.Link>
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/dental-aesthetics"
            >
              Dental Aesthetics
            </Nav.Link>
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/hair-transplantation"
            >
              Hair Transplantation
            </Nav.Link>
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/stem-cell-therapy"
            >
              Stem Cell Therapy
            </Nav.Link>
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/sexual-wellness"
            >
              Sexual Wellness
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="font-secondary fs-10 ms-lg-1 ms-md-3 ms-1"
              href="/contact "
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
