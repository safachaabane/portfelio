import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useTranslation } from 'react-i18next';
import "./Project.scss"
function Projects() {
  const {t}= useTranslation();
  const {projectList}=t('project',{returnObjects:true});
  function Project() {
    return projectList.map(({ id, imgPath, title,demoLink,listlogo }) => (
      <Col md={4} key={id} className="gridscroll-item">
      <ProjectCard
                  imgPath={imgPath}
                  isBlog={false}
                  title={title}
                  ghLink={listlogo}
                  demoLink={demoLink}
                /> 
                </Col>
    ));
  }
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <div class="scroll-container">
  <div class="gridscroll">
  <Project/>
   
            </div> 
            </div>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
