import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from '../Assets/logosafa1.png'
import CV from '../Assets/CV Safa Chaabane.pdf';
import en from "../Assets/en.png";
import fr from "../Assets/fr.png";
import arrowd from "../Assets/arrowd.png";
import {Link} from 'react-scroll'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import {BiDownload, BiOutline } from "react-icons/bi";

import { useTranslation } from "react-i18next";
//style
import './Navbar.scss';
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const {i18n}= useTranslation();
  const [isLanguageOpen,setIsLanguageOpen]= useState(false);

// select language :
function SelectLanguage() {
  return (
    <button
      type="button"
      className="select-lang"
      onClick={() => setIsLanguageOpen(!isLanguageOpen)}
    > 
      {i18n.language}<img className="arrow-down" src={arrowd} alt="arrow down" />
      {isLanguageOpen && (
        <div
          className={`select-lang-options ${isLanguageOpen ? 'active' : ''}`}
        >
          <button
            type="button"
            className="select-lang__button"
            onClick={() => {i18n.changeLanguage('en'); updateExpanded(false)}}
          >
          <img className="arrow-down" src={en} alt="en" />
            EN 
          </button>
          <button
            type="button"
            className="select-lang__button"
            onClick={() =>{ i18n.changeLanguage('fr'); updateExpanded(false)}}
          >
           <img className="arrow-down" src={fr} alt="fr" />
            FR
          </button>
        </div>
      )}
    </button>
  );
}
  
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="xs"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="navbar-logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span className="navbar-menu"></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link className="nav-link" activeClass="active" to="home"  spy={true} smooth={true} duration={0} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link"
               to="bio" spy={true} smooth={true}  offset={-80} duration={0}
               onClick={() => updateExpanded(false)}
              >
                <BiOutline
                  style={{ marginBottom: "2px" }}
                />{" "}
                Bio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link"
               to="about" spy={true} smooth={true}  offset={-80} duration={0}
                onClick={() =>updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </Nav.Item>

         
                 <Nav.Item>
              <Link className="nav-link"
               to="projects" spy={true} smooth={true} duration={0}
                onClick={() =>updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link"
               to="contact" spy={true} smooth={true} duration={0}
                onClick={() =>updateExpanded(false)}
              >
                <AiOutlineContacts
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <a href={CV} className="fork-btn-inner" download="CV Safa Chaabane.pdf"> 
              <BiDownload fontSize="25px"/>
                {" "}
               CV
 </a>
            </Nav.Item>
            <Nav.Item >
           <SelectLanguage/>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;