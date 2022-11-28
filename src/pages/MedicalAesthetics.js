import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function MedicalAesthetics() {
  return (
    <Row>
      <Col xs={3}>
        <Sidebar />
      </Col>
      <Col>
        <Container>
          Body
          <p>Hand Rejuvenation</p>
          <p>Body Skin Tightening & Firming</p>
          <p>Butt & Breast Lift</p>
          <p>Scar Treatment</p>
          <p>Neck/ Decollete Rejuvenation</p>
          <p>Skin Lightening</p>
          <p>Invasive Body Sculpting</p>
          <p>Labia Tightening & Lightening</p>
          <p>Vein Removal</p>
          <p>Hair Removal</p>
          <p>Cellulite</p>
          <p>Massage</p>
          <p>Massage</p>
        </Container>
        <Container>
          Face
          <p>Skin Rejuvenation</p>
          <p>Skin Tightening</p>
          <p>Pigmentation</p>
          <p>Acne</p>
          <p>Acne Scars</p>
          <p>Wrinkles & Lines</p>
          <p>Axillary Hyperhidrosis or Palmer Hyperhidrosis</p>
          <p>Lip Rejuvenation</p>
          <p>Eye Bags</p>
          <p>Face V-shaping</p>
          <p>Pore Reduction</p>
          <p>Facials</p>
          <p>Non-Surgical Nose Augmentation</p>
          <p>Volumisation</p>
        </Container>
        <Container>
          Wellness
          <p>Diet Programmes</p>
          <p>Bio-Identical Hormone Replacement Therapy</p>
        </Container>
      </Col>
    </Row>
  );
}

export default MedicalAesthetics;
