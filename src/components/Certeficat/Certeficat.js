import React from "react";
import { Container, Row } from "react-bootstrap";
import certeficat1 from "../../Assets/certeficat1.jpg";
import certeficat2 from "../../Assets/certeficat2.jpg";
import certeficat3 from "../../Assets/certeficat3.jpg";
import certeficat4 from "../../Assets/certeficat4.jpg";
import certeficat5 from "../../Assets/certeficat5.jpg";
import certeficat6 from "../../Assets/certeficat6.jpg";
import certeficat7 from "../../Assets/certeficat7.jpg";
import certeficat8 from "../../Assets/certeficat8.jpg";
//style
import "./Certeficat.scss";
function Certeficat() {
  return (
    <Container fluid className="certeficat-home" >
     <Row> <h1 className="certeficat-title">Certeficat</h1></Row>
     <Container  className="certeficat">
  <div className="scroll-parent">
  <div className="scroll-element primary">
      <img   className="first"  src={certeficat8} alt="" />
    	<img  className="first"  src={certeficat2} alt="" />
    	<img  className="first"  src={certeficat3} alt="" />
      <img className="first" src={certeficat1} alt="" />
    	<img  className="first"  src={certeficat4} alt="" />
    	<img  className="first"  src={certeficat5} alt="" />
    	<img  className="first"  src={certeficat6} alt="" />
    	<img  className="first"  src={certeficat7} alt="" />
    
  </div>
  
</div>
</Container>
    </Container>
  );
}
export default Certeficat;