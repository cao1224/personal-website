import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  const [isOriginalNavHidden, setIsOriginalNavHidden] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname + location.hash);

  const sections = [
    { id: 'about', hash: '#about' },
    { id: 'education', hash: '#education' },
    { id: 'skillset', hash: '#skillset' },
    { id: 'experiences', hash: '#experiences' },
  ];

  const showFloatingNavHandler = () => setIsFloatingNavVisible(true);
  const hideFloatingNavHandler = () => setIsFloatingNavVisible(false);

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

    // Update active link based on scroll position
    for (let section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveLink(location.pathname + section.hash);
          break;
        }
      }
    }
  };

  
  useEffect(() => {
    const intervalId = setInterval(checkConditions, 2000);
    checkConditions();

    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    setActiveLink(location.pathname + location.hash);

    const handleScroll = () => {
      checkConditions();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);



  return (
    <div className='container'>
      <div className="nav-home-container">
        <Link to="/" className="centered-image">
          <img id="header-img" src={Logo} alt="Personal Brand" />
        </Link>
        <div className={`${isOriginalNavHidden ? 'd-none' : ''}`}>
          <nav role="navigation" className="frosty-menu w-nav-menu" id="navbar">
            <a href="/#about" className={`nav-link w-nav-link ${activeLink === '/#about' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>About</a>
            <a href="/#education" className={`nav-link w-nav-link ${activeLink === '/#education' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>Education</a>
            <a href="/#skillset" className={`nav-link w-nav-link ${activeLink === '/#skillset' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>Skillset</a>
            <a href="/#experiences" className={`nav-link w-nav-link ${activeLink === '/#experiences' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>Experiences</a>
            <Link to="/projects" className={`nav-link w-nav-link ${activeLink === '/projects' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>Projects</Link>
            <Link to="/gallery" className={`nav-link w-nav-link ${activeLink === '/gallery' ? 'active-link' : ''}`} style={{ maxWidth: '100%' }}>Photography</Link>
          </nav>
        </div>
      </div>

      <nav id="floating_nav" className={`floating_nav ${isFloatingNavVisible ? '' : 'd-none'}`}>

        <ul className="scrollspy">
          <li className="nav-item">
            <a className={`nav-link ${activeLink === '/#about' ? 'active-link' : ''}`} href="/#about"><BsPersonFill /></a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === '/#education' ? 'active-link' : ''}`} href="/#education"><FaGraduationCap /></a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === '/#skillset' ? 'active-link' : ''}`} href="/#skillset"><BsTools /></a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeLink === '/#experiences' ? 'active-link' : ''}`} href="/#experiences"><MdWork /></a>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${activeLink === '/projects' ? 'active-link' : ''}`}><FaLightbulb /></Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className={`nav-link ${activeLink === '/gallery' ? 'active-link' : ''}`}><FaCamera /></Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
