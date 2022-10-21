import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import ContactAccount from "./components/Account/ContactAccount";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutme from "./components/About/Aboutme";
import MyBio from "./components/MyBio/MyBio";
import Certeficat from "./components/Certeficat/Certeficat";
import Contact from "./components/Contact/Contact";

import { FaAngleUp } from "react-icons/fa";



function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
  	// fucntion to help scroll to top smoothly
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        {showTopBtn && (
				<FaAngleUp className="icon-position icon-style" onClick={goToTop} />
			)}
        <ContactAccount/>
        <Home/>
        <MyBio/>
        <Aboutme/>
        <Certeficat/>
        <Projects/>
        <Contact/>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
