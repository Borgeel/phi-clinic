import React from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SocialMedia from "./SocialMedia";

import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-dark py-2">
      <Container>
        <Row className="mb-3">
          <Col lg={3} xs={4} className="my-2">
            <Image src={logo} alt="logo" fluid width="200rem" />
            <p className="color-primary fs-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              nostrum accusamus cumque assumenda qui saepe.
            </p>
          </Col>
          <Col lg={3} xs={4}>
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
          <Col lg={3} xs={4}>
            <Navbar variant="dark">
              <Nav className="flex-column fs-10">
                <h4 className="footer-row text-center"> Informations </h4>
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
          <Col lg={3} xs={4}>
            <Navbar variant="dark" className="flex-column">
              <h4 className="footer-row text-center"> Contact Us </h4>
              <SocialMedia />
            </Navbar>
          </Col>
        </Row>
        <Row className="border-top color-primary">
          <Col>
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
