import Carousel from "react-bootstrap/Carousel";
import img from "../assets/images/carousel2.jpg";

function BootCarousel() {
  return (
    <Carousel className="carousel-items sticky-top" variant="dark">
      <Carousel.Item>
        <img className="d-block img-fluid w-100" src={img} alt="First slide" />
        <Carousel.Caption className="font-primary color-primary">
          <h3>Medical Aesthetics</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="Second slide" />

        <Carousel.Caption className="font-primary color-primary">
          <h3>Dental Aesthetics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid d-block w-100" src={img} alt="Third slide" />

        <Carousel.Caption className="font-primary color-primary">
          <h3>Hair Transplantation</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid d-block w-100" src={img} alt="Third slide" />

        <Carousel.Caption className="font-primary color-primary">
          <h3>Stem Cell Therapy</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid d-block w-100" src={img} alt="Third slide" />

        <Carousel.Caption className="font-primary color-primary">
          <h3>Sexual Wellness</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootCarousel;
