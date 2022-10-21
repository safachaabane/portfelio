import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import logo from "../Assets/logosafa1.png";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <Container>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>By Chaabane Safa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/safachaabane"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/safa-chaabane-2a2437144"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:safa1chaabane@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Footer;
