import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="bg-dark py-2">
      <Container>
        <Row className="mb-3">
          <Col xs={4}>
            <Navbar variant="dark">
              <Nav className="flex-column fs-10">
                <h4 className="footer-row text-center">Treatments</h4>
                <LinkContainer to="medical-aesthetics">
                  <Nav.Link className=" p-0 mb-1">Medical Aesthetics</Nav.Link>
                </LinkContainer>
                <LinkContainer to="dental-aesthetics">
                  <Nav.Link className=" p-0 mb-1">Dental Aesthetics</Nav.Link>
                </LinkContainer>
                <LinkContainer to="hair-transplantation">
                  <Nav.Link className=" p-0 mb-1">
                    Hair Transplantation
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="stem-cell-therapy">
                  <Nav.Link className=" p-0 mb-1">Stem Cell Therapy</Nav.Link>
                </LinkContainer>
                <LinkContainer to="sexual-wellness">
                  <Nav.Link className=" p-0 mb-1">Sexual Wellness</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar>
          </Col>
          <Col xs={4}>
            <Navbar variant="dark">
              <Nav className="flex-column fs-10">
                <h4 className="footer-row text-center"> Informations </h4>
                <LinkContainer to="/contact">
                  <Nav.Link className=" p-0 mb-1">Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <Nav.Link className=" p-0 mb-1">FAQ</Nav.Link>
                </LinkContainer>
                <LinkContainer to="terms-and-conditions">
                  <Nav.Link className=" p-0 mb-1">
                    Terms and Conditions
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/privacy">
                  <Nav.Link className=" p-0 mb-1">Privacy Policy</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/covid-info">
                  <Nav.Link className=" p-0 mb-1">Covid Info</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row lg={2} className="border-top color-primary p-2 align-items-center">
          <Col xs={12}>
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </Col>
          <Col xs={12}>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
