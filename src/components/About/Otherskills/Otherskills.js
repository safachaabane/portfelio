
import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
//style
import "../Educational/Educational.scss";
function Otherskills() {
  const {t}= useTranslation();
  const {title,list}=t('otherskills',{returnObjects:true});
  function Listeduction() {
    return list.map(({ id, titleskills, description }) => (

   <Row className="education-section-list" key={id}>
   <Col md={9}  className="education-section-list-description">
  <h4 style={{color: "rgba(250,224,66,0.8)"}}>{titleskills}</h4>
  <p>{description}</p>
</Col>
   </Row>

    ));
  }
  return (
    <Container fluid className="education-section">
<h1>{title}
    </h1>
    <div>
      <Listeduction/>
    </div>
    </Container>
  );
}

export default Otherskills;

