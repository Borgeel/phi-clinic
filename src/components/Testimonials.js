import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Testimonials({ img, text, name }) {
  return (
    <Row xs={1} md={2} lg={3} className="m-0 p-2 font-primary">
      <Col xs={1} md={6} lg={5} className="m-0 p-0">
        <img
          src={img}
          alt="user"
          className="img-fluid"
          style={{ maxWidth: "60px" }}
        />
      </Col>
      <Col xs={1} md={6} lg={11} className="ms-2 p-0 text-wrap">
        <p>{text}</p>
        <h5>{name}</h5>
      </Col>
    </Row>
  );
}

export default Testimonials;
