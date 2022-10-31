import React from "react";
import { Nav } from "react-bootstrap";

function SocialMedia() {
  return (
    <Nav className="flex-column">
      <Nav.Link className="link-light">
        <i className="bi bi-facebook"> Facebook</i>
      </Nav.Link>
      <Nav.Link className="link-light">
        <i className="bi bi-whatsapp"> WhatsApp</i>
      </Nav.Link>
      <Nav.Link className="link-light">
        <i className="bi bi-instagram icon-large"> Instagram</i>
      </Nav.Link>
    </Nav>
  );
}

export default SocialMedia;
