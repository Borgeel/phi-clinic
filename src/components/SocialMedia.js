import React from "react";
import { Nav } from "react-bootstrap";

function SocialMedia() {
  return (
    <Nav className="text-center justify-content-center">
      <Nav.Link className="link-light">
        <i className="bi bi-facebook"></i>
      </Nav.Link>
      <Nav.Link className="link-light">
        <i className="bi bi-whatsapp"></i>
      </Nav.Link>
      <Nav.Link className="link-light">
        <i className="bi bi-instagram icon-large"></i>
      </Nav.Link>
    </Nav>
  );
}

export default SocialMedia;
