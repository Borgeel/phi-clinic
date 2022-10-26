import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Jumbotron() {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="jumbotron jumbotron-fluid bg-secondary bg-opacity-75 p-1 m-0 font-primary text-center">
        <Col xs={13}>
          <h1 className="display-6 mt-4">Premiere Medical & Dental Clinics</h1>
          <p className="lead fs-10">
            Aesthetic clinics located in Kuala Lumpur, Malaysia. PHI Clinic is
            completely equipped with the most sophisticated and cuing-edge treat
            ments in aesthetic medicine administered and managed by a team
          </p>
        </Col>
        <Row className="mb-4">
          <Col xs={4} className="jumbotron-item">
            <h1>20+</h1>
            <p>Years of Experience</p>
          </Col>
          <Col xs={4} className="jumbotron-item">
            <h1>5</h1>
            <p>Registered Doctors</p>
          </Col>
          <Col xs={4}>
            <h1>20+</h1>
            <p>Clinics Globally</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Jumbotron;
