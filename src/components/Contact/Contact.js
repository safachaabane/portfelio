
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap, BiPhone } from "react-icons/bi";

//style
import "./Contact.scss";
function Contact() {

  return (

    <Container fluid className="contact" id="contact" >
      <Container>
      <Row>
      <Col md={7}>
            <h1 className="contact-title" >
            Contact <span className="teal"> me </span>
            </h1>
            <div  className="contact-description" style={{ fontSize: "1.2em"}}>
         <p><BiPhone/> +216 21363712</p>
         <p><AiOutlineMail/> safa1chaabane@gmail.com</p>
         <p><BiMap/> Bni khalled Nabeul Tunisia</p>

</div>
          </Col>
<Col md={5} className="contact-form">
<form   action="https://formspree.io/f/xaykblek"
  method="POST"
  enctype="multipart/form-data">
<div className="input-contain name">
        <input
          className="inputsd"
          type='text'
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          name="First name"
          required
        />

        <label className="placeholder-text" htmlFor="firstname" id="firstname">
          <div className="text">First name</div>
        </label>
      </div>
      <div className="input-contain name">
        <input
          className="inputsd"
          type='text'
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          name="Last name"
          required
        />

        <label className="placeholder-text" htmlFor="Lastname" id="Lastname">
          <div className="text">Last name</div>
        </label>
      </div>
      <div className="input-contain">
        <input
          className="inputsd"
          type='email'
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          name="Email"
          required
        />

        <label className="placeholder-text" htmlFor="email" id="email">
          <div className="text">Email</div>
        </label>
      </div>

      <div className="input-contain">
        <input
          className="inputsd"
          type='number'
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          name="Phone"
          required
        />

        <label className="placeholder-text" htmlFor="Phone" id="Phone"  >
          <div className="text">Phone</div>
        </label>
      </div>
      <div className="input-contain">
        <textarea
          className="inputsd contact-textarea"
          rows="10"
          autoComplete="off"
          aria-labelledby="placeholder-fname"
          name="Message"
          required
        />

        <label className="placeholder-text textarea" htmlFor="message" id="message">
          <div className="text" >Message</div>
        </label>
      </div>
    
      <button type="submit"   className="contact-btn">Send </button>
</form>

</Col>
</Row>
</Container>
    </Container>

  );
}
export default Contact;