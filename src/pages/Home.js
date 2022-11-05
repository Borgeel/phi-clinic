import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import home1 from "../assets/images/facetreatment.png";
import carousel3 from "../assets/images/browsing.jpg";
import user from "../assets/images/user.png";

import PromoForm from "../components/PromoForm";
import Jumbotron from "../components/Jumbotron";
import ParallaxImage from "../components/ParallaxImage";
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
      {/* <BootCarousel /> */}
      <Jumbotron />
      <ParallaxImage />
      <Container fluid="sm" className="my-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Phi Clinic</h2>
            <hr />
            <p className="font-primary">
              PHI Clinic is a group of Premiere Medical Aesthetic
              clinics located in Kuala Lumpur, Malaysia. PHI Clinic is
              completely equipped with the most sophisticated and cutting-edge
              treatments in aesthetic medicine administered and managed by a
              team
            </p>
            <Button variant="outline-dark m-2" size="sm" className="shadow">
              Read more
            </Button>
            <Button size="sm" className="shadow grey-button">
              Book a consultation
            </Button>
          </Col>
          <Col
            md={6}
            className="p-5 my-4 d-flex justify-content-center align-items-center"
          >
            <Image
              fluid
              src={home1}
              alt="about us"
              className="rounded shadow-sm"
              style={{ objectFit: "cover", maxHeight: "60vh" }}
            />
          </Col>
        </Row>
        <hr />
      </Container>
      <Container fluid>
        <Container className="text-center justify-content-center p-2">
          <p className="my-0">What our customers say about us</p>
          <h3>Customer Testimonials</h3>
        </Container>
        <Container>
          <Card className="p-3 testimonial">
            <Row>
              {testimonies.map((testimony) => {
                return (
                  <Col lg={3} md={6} sm={12}>
                    <Testimonials
                      img={user}
                      text={testimony.text}
                      name={testimony.name}
                    />
                  </Col>
                );
              })}
            </Row>
          </Card>
          <hr />
        </Container>
      </Container>
      <Container fluid="sm" className="my-4">
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              fluid
              src={carousel3}
              alt="form"
              className="rounded shadow-sm my-4 w-100"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <PromoForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
