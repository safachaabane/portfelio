import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import profil from "../../Assets/profil2.png";
// import arrow from "../../Assets/arrow.gif"
import { useTranslation } from 'react-i18next';
import "./Home.scss"

function Home() {
  const {t}= useTranslation();
  const {greeting,iam}=t('home',{returnObjects:true});
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          <Row>
            <Col lg={7} md={12} className="home-header">
              <div className="home-section-h1"> {"<h1>"}</div>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {greeting}.{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
              {iam}
                <strong className="main-name"> Chaabane Safa</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>  
              <div className="home-section-h1">{"</h1>"}</div>
              {/* <Row  className="home-more">  
               
                <div className="heading">I invite you to explore things about me!</div>
<div className="heading"> <strong className="main-name">Let's Goooo!</strong></div>
          <img className="home-img"
               src={arrow} alt="" /></Row>  */}
 
            </Col>
            <Col lg={5} md={12} >
              <img
                src={profil}
                alt="home pic"
                className="img-fluid"
              
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
