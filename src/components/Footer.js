import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SocialMedia from "./SocialMedia";

import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <Container className="bg-dark" fluid>
      <Row className="p-3">
        <Col xs={12} className="d-flex justify-content-center my-2">
          <Image src={logo} alt="logo" fluid width="200rem" />
        </Col>
        <Col xs={12}>
          <p className="text-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            accusamus cumque assumenda qui saepe.
          </p>
        </Col>
      </Row>
      <Row className="text-center p-3">
        <Col sm={6} className="d-flex justify-content-center align-items-start">
          <Navbar variant="dark">
            <Nav className="flex-column fs-10">
              <h4 className="footer-row  text-white">Treatments</h4>
              <LinkContainer to="medical-aesthetics">
                <Nav.Link className="p-0 mb-1">Medical Aesthetics</Nav.Link>
              </LinkContainer>
              <LinkContainer to="dental-aesthetics">
                <Nav.Link className="p-0 mb-1">Dental Aesthetics</Nav.Link>
              </LinkContainer>
              <LinkContainer to="hair-transplantation">
                <Nav.Link className="p-0 mb-1">Hair Transplantation</Nav.Link>
              </LinkContainer>
              <LinkContainer to="stem-cell-therapy">
                <Nav.Link className="p-0 mb-1">Stem Cell Therapy</Nav.Link>
              </LinkContainer>
              <LinkContainer to="sexual-wellness">
                <Nav.Link className="p-0 mb-1">Sexual Wellness</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Col>
        <Col
          sm={6}
          className="d-flex justify-content-center align-items-start "
        >
          <Navbar variant="dark">
            <Nav className="flex-column fs-10">
              <h4 className="footer-row text-center text-white">
                Informations
              </h4>
              <LinkContainer to="/faq">
                <Nav.Link className="p-0 mb-1 ">FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to="terms-and-conditions">
                <Nav.Link className=" p-0 mb-1">Terms and Conditions</Nav.Link>
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
      <hr className="mb-3 text-light" />
      <Row className="d-flex align-items-center justify-content-center text-light p-2">
        <Col md={12} className="d-flex justify-content-center m-1">
          <span>Book a Consultation</span>
        </Col>
        <Col md={12} className="d-flex justify-content-center m-1">
          <Button type="button" variant="outline-light" className="p-3">
            Sign up!
          </Button>
        </Col>
      </Row>
      {/* <hr className="mb-2 text-light" /> */}
      <Row>
        <Col>
          <SocialMedia />
        </Col>
        <hr className="mb-2 text-light" />
        <Col>
          <p className="text-light text-center mt-1">
            © 2022 Company, Inc. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
