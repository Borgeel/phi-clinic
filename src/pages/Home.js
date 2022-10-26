import { Button, Col, Container, Row } from "react-bootstrap";
import BootCarousel from "../components/BootCarousel";

import home1 from "../assets/images/home1.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import PromoForm from "../components/PromoForm";

function Home() {
  return (
    <>
      <BootCarousel />
      <Container fluid="sm" className="mt-3">
        <Row className="align-items-center">
          <Col xs={6}>
            <h2>About Phi Clinic</h2>
            <hr />
            <p className="font-primary">
              PHI Clinic is a group of Premiere Medical and Dental Aesthetic
              clinics located in Kuala Lumpur, Malaysia. PHI Clinic is
              completely equipped with the most sophisticated and cuing-edge
              treatments in aesthetic medicine administered and managed by a
              team
            </p>
            <Button variant="outline-dark m-1" size="sm" className="shadow">
              Read more
            </Button>
            <Button variant="warning" size="sm" className="shadow">
              Book A consultation
            </Button>
          </Col>
          <Col
            xs={6}
            className="p-0 d-flex justify-content-center align-items-center"
          >
            <img
              src={home1}
              alt="about us"
              className="img-fluid rounded"
              style={{ maxHeight: "70vh" }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <img
              src={carousel3}
              alt="form"
              className="img-fuild rounded"
              style={{ maxHeight: "60vh" }}
            />
          </Col>
          <Col xs={6}>
            <PromoForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
