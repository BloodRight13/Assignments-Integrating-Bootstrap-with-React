// Task 1
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => (
  <Container className="text-center" style={{ marginTop: '50px', color: 'gray' }}>
    <Row className="align-items-center">
      <Col xs={12} md={6}>
        <Image src="path_to_error_image.jpg" fluid alt="Not Found" />
      </Col>
      <Col xs={12} md={6}>
        <h1 className="text-danger">404</h1>
        <h2>Page Not Found</h2>
        <p>We can't find the page you're looking for.</p>
        <Button variant="primary">
          <NavLink to="/" className="text-white text-decoration-none">
            Return to Homepage
          </NavLink>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default NotFound;