import React, { useState } from "react";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import useOutsideClick from "@rooks/use-outside-click";
//style
import "./ContactAccount.scss";
function ContactAccount() {
  const [active, setActive] = useState(true);
  const pRef = useRef();
  function outsidePClick() {
    if(!active){
    setActive(!active);
    }
  }
  useOutsideClick(pRef, outsidePClick);
  return (
   <Container className="contact-account"  ref={pRef}>
    <div id="toggle" onClick={() => setActive(!active)}>
          {active ?<span className="animate-charcter">Contact me</span> : ""}
        </div>
        <div  className={active ? "nav-menu" : "nav-menu-active"}>
      <a  href="https://github.com/safachaabane" target="_blank" rel="noopener noreferrer" onClick={() => setActive(!active)}>  <AiOutlineGithub className="contact-account-icon" fontSize="50px"/> </a>
      <a  href="https://www.linkedin.com/in/safa-chaabane-2a2437144" target="_blank" rel="noopener noreferrer" onClick={() => setActive(!active)}> <AiFillLinkedin className="contact-account-icon" fontSize="50px"/> </a>
      <a href="https://wa.me/21621363712/?text=urlencodedtext" target="_blank"  rel="noopener noreferrer" onClick={() => setActive(!active)}><AiOutlineWhatsApp className="contact-account-icon" fontSize="50px"/></a>
    <a  href="mailto:safa1chaabane@gmail.com" target="_blank" rel="noopener noreferrer" onClick={() => setActive(!active)}> <AiOutlineMail className="contact-account-icon" fontSize="50px"/></a>
        </div>
   </Container>
  );
}

export default ContactAccount;