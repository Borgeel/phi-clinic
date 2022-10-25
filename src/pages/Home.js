import { Button, Card, Col, Container, Row } from "react-bootstrap";

import home1 from "../assets/images/home1.jpg";

function Home() {
  return (
    <Container fluid="sm">
      <Row className="mt-3">
        <Col xs={6} className="p-3">
          <h2>About Phi Clinic</h2>
          <p>
            PHI Clinic is a group of Premiere Medical and Dental Aesthetic
            clinics located in Kuala Lumpur, Malaysia. PHI Clinic is completely
            equipped with the most sophisticated and cuing-edge treatments in
            aesthetic medicine administered and managed by a team
          </p>
          <Button variant="outline-dark m-1" size="sm">
            Read more
          </Button>
          <Button variant="warning" size="sm">
            Book A consultation
          </Button>
        </Col>
        <Col xs={5} className="p-0 d-flex justify-content-center">
          <img
            src={home1}
            alt="about us"
            className="img-fluid rounded"
            style={{ maxHeight: "70vh" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
