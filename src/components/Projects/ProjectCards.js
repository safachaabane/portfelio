import React from "react";
import Card from "react-bootstrap/Card";
import "./Project.scss"
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
    <Card.Link href={props.demoLink}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </Card.Link>
      <Card.Body className="project-card-view-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div>
     {props.ghLink.map(item =>
     <div className="project-list">
     <img className="project-list-img" src={`/images/Projects/listIcon/${item}.png`} alt="" />
     <p className="project-list-nameimg">{item}</p>
     </div>)
     }
     </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
