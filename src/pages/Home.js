import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BootCarousel from "../components/BootCarousel";

import home1 from "../assets/images/home1.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import user from "../assets/images/user.png";

import PromoForm from "../components/PromoForm";
import Jumbotron from "./Jumbotron";
import Testimonials from "../components/Testimonials";

const testimonies = [
  {
    name: "Test 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur eius cum, pariatur ullam libero modi quibusdam voluptatem at perferendis veniam sit ducimus aliquid. Laboriosam voluptatum iure at unde molestiae.",
  },
  {
    name: "Test 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur eius cum, pariatur ullam libero modi quibusdam voluptatem at perferendis veniam sit ducimus aliquid. Laboriosam voluptatum iure at unde molestiae.",
  },
  {
    name: "Test 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur eius cum, pariatur ullam libero modi quibusdam voluptatem at perferendis veniam sit ducimus aliquid. Laboriosam voluptatum iure at unde molestiae.",
  },
  {
    name: "Test 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur eius cum, pariatur ullam libero modi quibusdam voluptatem at perferendis veniam sit ducimus aliquid. Laboriosam voluptatum iure at unde molestiae.",
  },
];

function Home() {
  return (
    <>
      <BootCarousel />
      <Jumbotron />
      <Container fluid="sm" className="my-4">
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
            <Button variant="outline-dark m-2" size="sm" className="shadow">
              Read more
            </Button>
            <Button variant="warning" size="sm" className="shadow">
              Book A consultation
            </Button>
          </Col>
          <Col
            xs={6}
            className="p-1 my-4 d-flex justify-content-center align-items-center"
          >
            <img
              src={home1}
              alt="about us"
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", maxHeight: "70vh" }}
            />
          </Col>
        </Row>
        <hr />
        <Container fluid="sm" className="my-4">
          <Row>
            <Col xs={6}>
              <img
                src={carousel3}
                alt="form"
                className="img-fuild rounded shadow-sm my-4"
                style={{ objectFit: "cover", maxHeight: "70vh" }}
              />
            </Col>
            <Col xs={6}>
              <PromoForm />
            </Col>
          </Row>
        </Container>
        <Card>
          <Container className="d-flex flex-row">
            {testimonies.map((testimony) => {
              return (
                <Testimonials
                  img={user}
                  text={testimony.text}
                  name={testimony.name}
                />
              );
            })}
          </Container>

          <Button variant="outline-secondary" size="sm">
            See More
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default Home;
