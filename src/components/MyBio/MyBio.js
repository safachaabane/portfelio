import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../Assets/photoabout.png";
//style
import "./MyBio.scss";
function Aboutme() {
  return (
    <Container fluid className="home-about-section" id="bio">
      <Container>
        <Row>
          <Col md={5}>
          <div className="bio-img-border">
          <img className="bio-img" src={about} alt="about" />
          </div>
          </Col>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" , paddingBottom:"1.5em"}}>
              My <span className="teal"> bio </span>
            </h1>
            <Row  style={{ fontSize: "1.2em"}}>
         <p>I'm a Full Stack developer based in Nabeul,Tunisia. With a focus on Front End Development. I am well-versed in a variety of front end and  languages, responsive frameworks, and database management systems. My goal is simple to use my development and analytical skills to improve corporate performance as a developer.
            </p><p>

Although I am well-versed in a variety of programming languages, my core expertise is in HTML/CSS, Bootstrap, JavaScript, React.js, Gatsby, nodeJs .
</p><p>
With a heavy emphasis on "Progressive Enhancement," I strive for innovative methods to push my bounds while adhering to proper code standards.

In a quest for always keeping myself updated, I read books and attend seminars & meetups.</p>
</Row>
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}
export default Aboutme;
