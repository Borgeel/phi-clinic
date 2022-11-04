import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PromoForm() {
  return (
    <Card className="form my-4">
      <Card.Body>
        <Card.Subtitle>Interested?</Card.Subtitle>
        <Card.Title>Let's keep in touch!</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          quidem, recusandae nihil corporis...
        </Card.Text>
        <Form className="p-1">
          <Row>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Phone" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicPassword" className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your number or email with anyone else.
            </Form.Text>
          </Form.Group>
          <div className="d-grid">
            <Button className="grey-button" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PromoForm;
