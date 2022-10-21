import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import "./Skills.scss"
function Skills() {
  const {t}= useTranslation();
  const {title,listskills}=t('skills',{returnObjects:true});
  function ListSkills() {
    return listskills.map(({ id, title1, list }) => (
      <Col md={6}  className="skills-item" key={id}>
   <h2 className="skills-title">{title1}</h2>
   <Row>
   {list.map(({ iditem, item, imgicon }) => (
    <Col key={iditem}>
<img className="skills-img" src={`/images/skills/${imgicon}.png`}  alt="logo"/>
<p>{item}</p>
</Col>
   ))
   }
   </Row>
   </Col>
    ));
  }
  return (
    <Container fluid className="skills-section">
<h1>{title}
    </h1>
    <Row  className="skills">
      <ListSkills/>
    </Row>
    </Container>
  );
}

export default Skills;
