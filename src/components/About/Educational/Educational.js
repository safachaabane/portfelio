import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
//style
import "./Educational.scss";
function Educational() {
  const {t}= useTranslation();
  const {title,list}=t('education',{returnObjects:true});
  function Listeduction() {
    return list.map(({ id, titleformation, nameinstitute, date }) => (

   <Row className="education-section-list" key={id}>
   <Col md={3} className="education-section-list-date" ><p>{date}</p></Col>
   <Col md={9}  className="education-section-list-description">
  <h4>{titleformation}</h4>
  <p>{nameinstitute}</p>
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

export default Educational;
