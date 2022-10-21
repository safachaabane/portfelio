import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//style
import "./Aboutme.scss";
import Otherskills from "./Otherskills/Otherskills";
import Experience from "./Experience/Experience";
import Educational from "./Educational/Educational";
import Skills from "./Skills/Skills";
function Aboutme() {
    const [key, setKey] = useState('skills');
  return (
    <Container fluid className="about" id="about">
      <Container>
        <Row>
          <Row md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="teal"> Me </span>
            </h1>
           </Row>
<Row className="about-tab">
<Tabs 
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 about-tab-item"
    >
      <Tab  eventKey="skills" title="MY SKILLS">
        <Skills />
      </Tab>
      <Tab  eventKey="education" title="Education">
        <Educational />
      </Tab>
      <Tab  eventKey="experience" title="EXPERIENCE" >
        <Experience />
      </Tab>
      <Tab eventKey="otherskills" title="ADDITIONAL SKILLS" >
        <Otherskills />
      </Tab>
      
    </Tabs>
</Row>
 
           </Row>
         
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dhruvsr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-ramu-1a325622a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dhruv@thegeekly.net"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Aboutme;
