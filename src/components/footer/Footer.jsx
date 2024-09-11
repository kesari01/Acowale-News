// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-column">
            <h5>About Us</h5>
            <p>
              Acowaler provides the latest and historical worldwide news
              articles. Our mission is to bring you the most relevant and
              accurate news from around the globe.
            </p>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Contact Us</h5>
            <p>Email: support@acowaler.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Acowaler. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
