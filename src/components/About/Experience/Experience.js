import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
//style
import "../Educational/Educational.scss";
import "./Experience.scss";
function Experience() {
  const {t}= useTranslation();
  const {title,list}=t('experience',{returnObjects:true});

  function Listeduction() {
    return list.map(({ id, titleexperience, namesociete, description, date }) => (

   <Row className="education-section-list" key={id}>
   <Col md={3} className="education-section-list-date" ><p>{date}</p></Col>
   <Col md={9}  className="education-section-list-description">
  <h4>{titleexperience}</h4>
  <p>{namesociete}</p>
  <p>{description.split('.').map((name) => (
          <li className="table-content-item-list">{name}</li>
        ))}</p>
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

export default Experience;
