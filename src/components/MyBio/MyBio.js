import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import about from "../../Assets/photoabout.png";
//style
import "./MyBio.scss";
function Aboutme() {
  const {t}= useTranslation();
  const {title1,title2,description1,description2,description3}=t('bio',{returnObjects:true});
  return (
    <Container fluid className="home-about-section" id="bio">
      <Container>
        <Row>
          <Col md={10} lg={5} >
          <div className="bio-img-border">
          <img className="bio-img" src={about} alt="about" />
          </div>
          </Col>
          <Col  md={12} lg={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" , paddingBottom:"1.5em"}}>
              {title1} <span className="teal"> {title2} </span>
            </h1>
            <Row  style={{ fontSize: "1.2em"}}>
         <p>{description1}</p><p>
{description2}</p><p>{description3}</p>
</Row>
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}
export default Aboutme;
