import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark py-2">
      <Container>
        <Row className="mb-3">
          <Col xs={4}>
            <Navbar variant="dark">
              <Nav className="flex-column fs-10">
                <Nav.Link href="/medical-aesthetics" className=" p-0 mb-1">
                  Medical Aesthetics
                </Nav.Link>
                <Nav.Link href="/dental-aesthetics" className=" p-0 mb-1">
                  Dental Aesthetics
                </Nav.Link>
                <Nav.Link href="hair-transplantation" className=" p-0 mb-1">
                  Hair Transplantation
                </Nav.Link>
                <Nav.Link href="stem-cell-therapy" className=" p-0 mb-1">
                  Stem Cell Therapy
                </Nav.Link>
                <Nav.Link href="sexual wellness" className=" p-0 mb-1">
                  Sexual Wellness
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row className="border-top color-primary p-2 align-items-center">
          <Col xs={6}>
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </Col>
          <Col xs={6}>
            <Nav className="justify-content-center">
              <Nav.Link className="link-light">
                <i className="bi bi-facebook"> Facebook</i>
              </Nav.Link>
              <Nav.Link className="link-light">
                <i className="bi bi-whatsapp"> WhatsApp</i>
              </Nav.Link>
              <Nav.Link className="link-light">
                <i className="bi bi-instagram icon-large"> Instagram</i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
