import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Testimonials({ img, text, name }) {
  return (
    <Container xs={12}>
      <Row>
        <Col lg={3} md={3} sm={2}>
          <p>
            <Image src={img} alt="user" fluid style={{ maxWidth: "50px" }} />
          </p>
        </Col>
        <Col lg={9} md={9} sm={10}>
          <h5>{name}</h5>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
