import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PromoForm() {
  return (
    <Card className="bg-warning p-3 m-3 bg-opacity-75">
      <Card.Body>
        <Form className>
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Phone" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your number or email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PromoForm;
