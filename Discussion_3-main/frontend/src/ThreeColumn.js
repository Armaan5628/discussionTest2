import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

export default function ThreeColumn() {
  return (
    <section id="three-column" className="three-column-section py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm gradient-card gradient-1 text-white">
              <Card.Body>
                <Card.Title>Share Ideas</Card.Title>
                <Card.Text>
                  Post your thoughts and spark meaningful conversations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm gradient-card gradient-2 text-white">
              <Card.Body>
                <Card.Title>Engage</Card.Title>
                <Card.Text>
                  Like, dislike, and comment on discussions that interest you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm gradient-card gradient-3 text-white">
              <Card.Body>
                <Card.Title>Collaborate</Card.Title>
                <Card.Text>
                  Work together by sharing posts and building knowledge.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
