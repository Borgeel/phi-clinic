import React from "react";
import { Col, Row } from "react-bootstrap";

function Jumbotron() {
  return (
    <Row
      fluid
      className="jumbotron jumbotron-fluid bg-secondary bg-opacity-75 m-0 font-primary text-center"
    >
      <Col xs={13}>
        <h3 className="display-7 mt-3">Premiere Medical & Dental Clinics</h3>
        <p className="lead fs-10 p-1">
          Aesthetic clinics located in Kuala Lumpur, Malaysia. PHI Clinic is
          completely equipped with the most sophisticated and cutting-edge treat
          ments in aesthetic medicine administered and managed by a team
        </p>
      </Col>
      <Row className="mb-1">
        <Col xs={4} className="jumbotron-item">
          <h3>20+</h3>
          <p>Years of Experience</p>
        </Col>
        <Col xs={4} className="jumbotron-item">
          <h3>5</h3>
          <p>Registered Doctors</p>
        </Col>
        <Col xs={4}>
          <h3>20+</h3>
          <p>Clinics Globally</p>
        </Col>
      </Row>
    </Row>
  );
}

export default Jumbotron;
