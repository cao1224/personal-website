import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/assets/img/logo.png';
import "../..//assets/styles/header.css";
import './floating-nav.css'

import { BsPersonFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";

const Navbar = () => {
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  const [isOriginalNavHidden, setIsOriginalNavHidden] = useState(false);

  const showFloatingNavHandler = () => setIsFloatingNavVisible(true);
  const hideFloatingNavHandler = () => setIsFloatingNavVisible(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 20) {
  //     showFloatingNavHandler();
  //   } else {
  //     hideFloatingNavHandler();
  //   }
  // };

  // const handleResize = () => {
  //   if (window.innerWidth <= 992) {
  //     setIsOriginalNavHidden(true);
  //   } else {
  //     setIsOriginalNavHidden(false);
  //   }
  //   handleScroll();
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Check initial width
    

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  const checkConditions = () => {
    const width = window.innerWidth;
    const scrollY = window.scrollY;

    if (width <= 992) {
      setIsOriginalNavHidden(true);
      showFloatingNavHandler();
    } else {
      setIsOriginalNavHidden(false);
      if (scrollY > 20) {
        showFloatingNavHandler();
      } else {
        hideFloatingNavHandler();
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(checkConditions, 2000);
    checkConditions();

    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className='container'>
      <div className="nav-home-container">
        <Link to="/" className="centered-image">
          <img id="header-img" src={Logo} alt="Personal Brand" />
        </Link>
        <div className={`${isOriginalNavHidden ? 'd-none' : ''}`}>
          <nav role="navigation" className="frosty-menu w-nav-menu" id="navbar">
            <a href="/#about" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>About</a>
            <a href="/#education" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Education</a>
            <a href="/#skillset" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Skillset</a>
            <a href="/#experiences" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Experiences</a>
            <Link to="/projects" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Projects</Link>
            <Link to="/gallery" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Gallery</Link>
          </nav>
        </div>
      </div>
      
      {/* <div className={`${isOriginalNavHidden ? 'd-none' : ''}`}>
        <div className="nav-home-container">
            <Link to="/" className="centered-image">
                <img id="header-img" src={Logo} alt="Personal Brand" />
            </Link>
  
            <nav role="navigation" className="frosty-menu w-nav-menu" id="navbar">
                <a href="/#about" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>About</a>
                <a href="/#education" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Education</a>
                <a href="/#skillset" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Skillset</a>
                <a href="/#experiences" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Experiences</a>
                <Link to="/projects" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Projects</Link>
                <Link to="/gallery" className="nav-link w-nav-link" style={{ maxWidth: '100%' }}>Gallery</Link>
            </nav>
        </div>
      </div> */}


        <nav id="floating_nav" className={`floating_nav ${isFloatingNavVisible ? '' : 'd-none'}`}>
          
          <ul className="scrollspy">
            <li className="nav-item">
              <a className="nav-link" href="/#about"><BsPersonFill/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#education"><FaGraduationCap/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skillset"><BsTools/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#experiences"><MdWork/></a>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link"><FaLightbulb/></Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link"><FaCamera/></Link>
            </li>
          </ul>
      </nav>

    </div>
  );
};

export default Navbar;
