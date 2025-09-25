import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";

export default function CustomNavbar({ user, onLogout }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Discussion Board</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Hero Section</Nav.Link>
              <Nav.Link href="#three-column">Three Column</Nav.Link>
              {user && <Nav.Link href="#discussions">Discussions</Nav.Link>}
              {user ? (
                <Button variant="outline-light" className="ms-2" onClick={onLogout}>
                  Logout
                </Button>
              ) : null}
              <Button
                variant="custom-btn"
                className="ms-2"
                onClick={() => setShow(true)}
              >
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Copyright Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
