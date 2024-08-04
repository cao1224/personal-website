import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../navBar/Navbar';
import PdfModal from '../../components/PdfModal';
import Footer from '../footer/Footer';

import Resume from "/assets/files/Yuancheng_Cao_Resume.pdf";


import ucsdCover from "/assets/img/photo-ucsd.jpg";
import codepathCover from "/assets/img/CodePath.jpeg";
import Apprentice from '/assets/img/apprentice.png';
import DesignLab_work from "/assets/img/StoriesUnshelteredCrowd.jpeg";
import CodeDay_work from "/assets/img/SU23_openSource.png";
import modeling_work from "/assets/img/birch.gif";

import coding_people from '/assets/img/coding_memoji.png';
import two_hand_memoji from '/assets/img/two_hand_memoji.png';
import greet from '/assets/img/greet.png';
import call_me from '/assets/img/call_me.png';
import linkedin_logo from '/assets/img/LinkedIn_logo_initials.png';

import '../../assets/styles/skillset.css';
import '../../assets/styles/common.css';

import { FaLink } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";




const About = () => {

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToAbout = () => {
    window.location.hash = 'about';
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const [modalInfo, setModalInfo] = useState({
    show: false,
    pdfUrl: '',
    title: ''
  });

  const handleOpenModal = (pdfUrl, title) => {
    setModalInfo({
      show: true,
      pdfUrl,
      title
    });
  };

  const handleCloseModal = () => {
    setModalInfo({
      show: false,
      pdfUrl: '',
      title: ''
    });
  };

  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/assets/img/California.png', '/assets/img/hawaii.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
    }, 500); // match the transition time for a smoother effect
  };

  useEffect(() => {
    document.title = "About - Kaleo Cao";
  }, [])

  return (

    <div>
      <div id="header">
        <Navbar />

        <div id="welcome-container">
          <h1><span className="wave">👋</span> Aloha! I'm Yuancheng Cao.</h1>

          <div className="gap-2 d-md-block">
            <a className="btn btn-primary-soft mr-5 btn-sm" href={Resume} target="_blank" role="button">Hire Me!</a>
            <button id="about-me-btn" className="btn btn-secondary-soft btn-sm" type="button" onClick={scrollToAbout}>About Me <FaAnglesDown className="animated-icon" /></button>
          </div>
        </div>

      </div>

      <main className="container">
        {/* About Me section */}
        <section id="about" className="pt-8 pt-md-11">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">
                <h3 className="text-uppercase font-weight-bold">About ME</h3>
              </div>
            </div>


            <div className="row justify-content-between">
              <div className="col-12 col-md-6 order-md-2">



                <p className="font-size-lg text-muted my-4">
                  Yuancheng (Kaleo) Cao is a fourth undergraduate at University of California,
                  San Diego studying Data Science and Computing Arts.
                </p>

                <p className="font-size-lg text-muted mb-4">
                  He is an <span className="text-success font-weight-bolder">interdisciplinary explorer</span> passionate about the <span className="text-success font-weight-bolder">intersection of technology, data, and creative expression</span>. With a background in data science, he turns complex datasets into meaningful stories. His studies in computing arts have sparked his love for <span className="text-success font-weight-bolder">using technology as a medium for art</span>, allowing him to create dynamic and immersive experiences. He loves art and technology and enjoys developing projects that combine these fields to <span className="text-success font-weight-bolder">inspire and innovate</span>. Feel free to browse his portfolio to see some of his recent projects, or connect with him on LinkedIn.
                </p>


              </div>

              <div className="col-12 col-md-6 order-md-1">
                <div className="row">

                  <div className="col-6 mb-3">
                    <div className="card square-card">
                      <img
                        src={images[currentImage]}
                        className="card-img-top img-fluid origin-img"
                        alt="Rotating Card"
                      />
                      <div
                        className="plus-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#aboutmeModal"
                      >
                        +
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="aboutmeModal"
                      tabIndex="-1"
                      aria-labelledby="aboutmeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="aboutmeModalLabel">More About Yuancheng (Kaleo)</h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-5 align-self-center">
                                <img
                                  src={images[currentImage]}
                                  className="img-fluid"
                                  alt="Rotating Card"
                                  style={{ borderRadius: '20px' }}
                                />
                              </div>
                              <div className="col-7">
                                <div className="dialogue">

                                <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      What is your preferred name?
                                    </div>
                                  </div>
                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      Kaleo
                                    </div>
                                  </div>

                                  <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      Where are you from?
                                    </div>
                                  </div>
                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      I was born in Fujian, China, immigrated to Hawaii, USA, and I am currently living in San Diego, CA.  I usually go back to Hawaii during the winter break.
                                    </div>
                                  </div>


                                  <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      What do you usually do in your free time?
                                    </div>
                                  </div>

                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      🥐🍻🍵☕️🍱🎬🎳🍜🍽️🍳🚣✈️🎢📷
                                    </div>
                                  </div>

                                  <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      What is your MBTI?
                                    </div>
                                  </div>

                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      INFJ
                                    </div>
                                  </div>


                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 mb-3">
                    <a href="https://www.linkedin.com/in/cyc2025/" target="_blank" rel="noopener noreferrer">
                      <div className="card square-card">
                        <img
                          src={linkedin_logo}
                          className="card-img-top img-fluid origin-img"
                          alt="LinkedIn Logo"
                        />
                        <div className="plus-icon">+</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-6 mb-3">
                    <a href={Resume} target="_blank">
                      <div className="card square-card" style={{ backgroundColor: '#e8dab2' }}>
                        <h3 className="top-center-text">Resume/CV</h3>
                        <img
                          src={coding_people}
                          className="card-img-bottom img-fluid scaled-image"
                          alt="Card 3"
                        />
                        <div className="plus-icon">+</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-6 mb-3">
                    <div className="card square-card" style={{ backgroundColor: '#ffb703' }}>
                      <h4 className="top-center-text">How to Pronounce "Yuancheng"?</h4>
                      <img
                        src={greet}
                        className="card-img-bottom img-fluid scaled-image"
                        alt="Card 4"
                      />

                      <div
                        className="plus-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        +
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">How to Pronounce "Yuancheng"?</h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-4 align-self-end">
                                <img
                                  src={call_me}
                                  className="card-img-top img-fluid origin-img"
                                  alt="Call me memoji"
                                />
                              </div>
                              <div className="col-8">
                                <div className="dialogue">
                              
                                  <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      How to pronounce "Yuancheng" in English Phonetic?
                                    </div>
                                  </div>
                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      yoo•an-cheng
                                    </div>
                                  </div>

                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-audio">
                                      <audio controls>
                                        <source src="/assets/files/english_pronoun.m4a" type="audio/mp4" />
                                        Your browser does not support the audio element.
                                      </audio>
                                    </div>
                                  </div>
                                  <div className="dialogue-row">
                                    <div className="dialogue-text">
                                      How to pronounce "源程" in Chinese 拼音 (Pinyin)?
                                    </div>
                                  </div>

                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-phonetic">
                                      yuán chéng
                                    </div>
                                  </div>

                                  <div className="dialogue-row justify-content-end">
                                    <div className="dialogue-audio">
                                      <audio controls>
                                        <source src="/assets/files/chinese_pronounce.m4a" type="audio/mp4" />
                                        Your browser does not support the audio element.
                                      </audio>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-12">
                        <div className="card rectangle-card">
                          <img
                            src="https://via.placeholder.com/600x300?text=Rectangle+Card"
                            className="card-img-top img-fluid"
                            alt="Rectangle Card"
                          />
                          <div className="plus-icon">+</div>
                        </div>
                      </div> */}

                </div>
              </div>





            </div>

          </div>
        </section>

        <section id="education" className="pt-8 pt-md-11">
          <div className="container">

            {/* <!-- Education Header --> */}
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">

                {/* <!-- Preheading --> */}
                <h3 className="text-uppercase font-weight-bold">Education</h3>

              </div>
            </div>  {/* <!-- / .row --> */}

            {/* <!-- Education Programs --> */}
            <div className="row">
              <div className="col-12">

                {/* <!-- UCSD Card --> */}
                <div className="card card-row shadow-light-lg mb-6">
                  <div className="row no-gutters">
                    <div className="col-12">

                      {/* <!-- Badge --> */}
                      <span className="badge badge-pill badge-gray-600 badge-float badge-float-outside">
                        <span className="h6 text-uppercase">Undergraduate</span>
                      </span>

                    </div>
                    <a className="col-12 col-md-6 order-md-2 bg-cover card-img-right" style={{ backgroundImage: `url(${ucsdCover})` }} href="https://www.ucsd.edu" target="_blank">

                      {/* <!-- Image (placeholder) --> */}
                      <img src={ucsdCover} alt="..." className="img-fluid d-md-none invisible"></img>

                      {/* <!-- Shape --> */}
                      <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                        <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v386l-50 772v386H0V0z" fill="currentColor"></path></svg>
                      </div>

                    </a>
                    <div className="col-12 col-md-6 order-md-1">

                      {/* <!-- Body --> */}
                      <a className="card-body">

                        {/* <!-- Heading --> */}
                        <h3 className="font-weight-bold text-left">University of California, San Diego</h3>

                        {/* <!-- Text --> */}
                        <p className="font-size-sm text-muted mb-6 mb-md-8">
                          September 2021 - March 2025
                        </p>

                        {/* <!-- Detail school description --> */}
                        <div className="list-group list-group-flush mb-0">
                          <div className="list-group-item d-flex align-items-center">

                            {/* <!-- Text -->                 */}
                            <div className="mr-auto">

                              {/* <!-- Heading --> */}
                              <h5 className="font-weight-bold mb-2">Degrees and Majors</h5>

                              <div
                                className="d-flex align-items-start"
                                onClick={() => window.open('https://datascience.ucsd.edu/', '_blank')}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className='mb-2 hover-animate'>
                                  <p className="text-muted ml-2 mr-2">Bachelor of Science, Data Science</p>
                                </div>
                              </div>

                              <div
                                className="d-flex align-items-center"
                                onClick={() => window.open('https://visarts.ucsd.edu/undergrad/major-req/icam.html', '_blank')}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className="d-flex align-items-center hover-animate">
                                  <div>
                                    <p className="text-muted ml-2 mr-2">Bachelor of Arts, Interdisciplinary Computing and Arts</p>
                                  </div>
                                </div>

                              </div>

                            </div>

                          </div>

                        </div>  {/* <!-- end of school description --> */}

                      </a>
                    </div>

                  </div> {/* <!-- / .row --> */}
                </div>

                {/* <!-- CodePath Card --> */}
                <div className="card card-row shadow-light-lg mb-6">
                  <div className="row no-gutters">
                    <div className="col-12">

                      {/* <!-- Badge --> */}
                      <span className="badge badge-pill badge-gray-600 badge-float badge-float-outside">
                        <span className="h6 text-uppercase">coding bootcamp</span>
                      </span>

                    </div>
                    <a className="col-12 col-md-6 bg-cover card-img-left" style={{ backgroundImage: `url(${codepathCover})` }} href="https://codepath.com/" target="_blank">

                      {/* <!-- Image (placeholder) --> */}
                      <img src={codepathCover} alt="..." className="img-fluid d-md-none invisible"></img>

                      {/* <!-- Shape --> */}
                      <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                        <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 386V0h100v1544H50v-386L0 386z" fill="currentColor"></path></svg>
                      </div>

                    </a>
                    <div className="col-12 col-md-6">

                      {/* <!-- Body --> */}
                      <a className="card-body">
                        <h3 className="font-weight-bold text-left mb-1">CodePath</h3>

                        {/* <!-- Text --> */}
                        <p className="font-size-sm text-muted mb-6 mb-md-8">June 2022 - November 2023</p>

                        {/* <!-- Detail school description --> */}
                        <div className="list-group list-group-flush mb-0">
                          <div className="list-group-item d-flex align-items-center">

                            {/* <!-- Text -->                 */}
                            <div className="mr-auto">

                              {/* <!-- Heading --> */}
                              <h5 className="font-weight-bold mb-2">Certifications</h5>

                              {/* Intermediate Web Development */}
                              <div className="d-flex align-items-start mb-2" onClick={() => handleOpenModal('/assets/files/Intermediate-Android-Development.pdf', 'Media: Intermediate Web Development Certification')} style={{ cursor: 'pointer' }}>
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className='mb-2 hover-animate'>
                                  <p className="text-muted ml-2 mr-2">Intermediate Web Development</p>
                                </div>
                              </div>

                              {/* Intermediate iOS Development */}
                              <div className="d-flex align-items-start mb-2" onClick={() => handleOpenModal('/assets/files/Intermediate-iOS-Development.pdf', 'Media: Intermediate iOS Development Certification')} style={{ cursor: 'pointer' }}>
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className='mb-2 hover-animate'>
                                  <p className="text-muted ml-2 mr-2">Intermediate iOS Development</p>
                                </div>
                              </div>



                              {/* <!-- Intermediate Android Development --> */}
                              <div className="d-flex align-items-start mb-2" onClick={() => handleOpenModal('/assets/files/Intermediate-Android-Development.pdf', 'Media: Intermediate Android Development Certification')} style={{ cursor: 'pointer' }}>
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className='mb-2 hover-animate'>
                                  <p className="text-muted ml-2 mr-2">Intermediate Android Development</p>
                                </div>
                              </div>



                              {/* <!-- Advanced Technical Interview Prep --> */}
                              <div className="d-flex align-items-start" onClick={() => handleOpenModal('/assets/files/Tech-Interview-Prep-Certificate.pdf', 'Media: Advanced Technical Interview Prep Certification')} style={{ cursor: 'pointer' }}>
                                <div className="icon-square text-dark flex-shrink-0 mr-2">
                                  <FaLink style={{ color: '#187cf5' }} />
                                </div>

                                <div className='hover-animate'>
                                  <p className="text-muted ml-2 mr-2">Advanced Technical Interview Prep</p>
                                </div>
                              </div>


                              <PdfModal
                                show={modalInfo.show}
                                handleClose={handleCloseModal}
                                pdfUrl={modalInfo.pdfUrl}
                                title={modalInfo.title}
                              />

                            </div>

                          </div>

                        </div> {/* <!-- end of school description --> */}
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div> {/* <!-- / .row --> */}
          </div> {/* <!-- / .container --> */}
        </section>

        <section id="skillset" className="pt-8 pt-md-11">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">

                <h3 className="text-uppercase font-weight-bold">skillset</h3>

              </div>
            </div>

            <div className="services_container">

              {/* <!-- Machine Learning -->  */}
              <article className="special_card service light">

                <div className="service_icon">
                  <svg stroke="currentColor" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" width="25px" height="25px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="machine--learning--01_1_" d="M12,1.64c-0.002,0-0.004,0-0.006,0c-1.473,0-2.691,0.759-3.239,2h-0.48 c-0.003,0-0.006,0-0.009,0c-1.271,0-2.478,0.425-3.398,1.199C3.892,5.659,3.354,6.79,3.352,8.021 c-0.001,0.995,0.526,2.097,1.025,2.791c-2.223,0.77-3.734,2.633-3.737,4.688c-0.003,2.046,1.507,3.91,3.734,4.687 c-0.506,0.692-1.044,1.788-1.045,2.766c-0.003,2.426,2.215,4.403,4.947,4.408h0.48c0.543,1.238,1.764,1.998,3.244,2 c0.002,0,0.004,0,0.007,0c1.972,0,3.351-1.381,3.354-3.36V5C15.363,3.025,13.982,1.643,12,1.64z M12,18.64 c-0.353,0-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64S12.353,18.64,12,18.64z M14.64,13.64h-2.28V7.305 c0.575-0.159,1-0.681,1-1.305c0-0.75-0.61-1.36-1.36-1.36S10.64,5.25,10.64,6c0,0.625,0.425,1.146,1,1.305v6.335H10 c-0.001,0-0.001,0-0.002,0C9.2,13.64,8.641,14.199,8.64,15v0.64H6.305c-0.159-0.575-0.681-1-1.305-1c-0.75,0-1.36,0.61-1.36,1.36 S4.25,17.36,5,17.36c0.625,0,1.147-0.426,1.305-1H8.64v5.834c-0.575,0.159-1,0.681-1,1.306c0,0.75,0.61,1.36,1.36,1.36 s1.36-0.61,1.36-1.36c0-0.625-0.425-1.147-1-1.306V15c0.001-0.401,0.239-0.641,0.639-0.641H10h4.64v11.639 c-0.003,1.456-0.908,2.46-2.28,2.61v-9.303c0.575-0.159,1-0.681,1-1.306c0-0.75-0.61-1.36-1.36-1.36s-1.36,0.61-1.36,1.36 c0,0.625,0.425,1.147,1,1.306v9.31c-1.103-0.114-1.951-0.742-2.3-1.735C9.289,26.736,9.153,26.64,9,26.64H8.276 c-2.036-0.003-4.23-1.413-4.228-3.686c0.002-0.966,0.714-2.209,1.206-2.699c0.092-0.091,0.127-0.225,0.093-0.35 s-0.132-0.222-0.257-0.254c-2.199-0.566-3.733-2.273-3.73-4.151c0.003-1.876,1.522-3.573,3.695-4.141h2.64 c0.159,0.575,0.681,1,1.305,1c0.75,0,1.36-0.61,1.36-1.36S9.75,9.64,9,9.64c-0.625,0-1.146,0.425-1.305,1H5.162 C4.685,10.099,4.07,8.949,4.071,8.022C4.073,7.006,4.52,6.072,5.332,5.39c0.779-0.655,1.849-1.03,2.936-1.03 c0.002,0,0.005,0,0.008,0H9c0.152,0,0.288-0.096,0.339-0.239c0.392-1.103,1.384-1.761,2.655-1.761c0.002,0,0.003,0,0.005,0 C13.582,2.363,14.643,3.423,14.64,5V13.64z M12,6.64c-0.353,0-0.64-0.287-0.64-0.64S11.647,5.36,12,5.36S12.64,5.647,12.64,6 S12.353,6.64,12,6.64z M9,22.86c0.353,0,0.64,0.287,0.64,0.64S9.353,24.14,9,24.14s-0.64-0.287-0.64-0.64S8.647,22.86,9,22.86z M5.64,16c0,0.353-0.287,0.64-0.64,0.64S4.36,16.353,4.36,16S4.647,15.36,5,15.36S5.64,15.647,5.64,16z M8.36,11 c0-0.353,0.287-0.64,0.64-0.64S9.64,10.647,9.64,11S9.353,11.64,9,11.64S8.36,11.353,8.36,11z M31.36,15.5 c0.002-2.046-1.508-3.909-3.734-4.687c0.507-0.692,1.044-1.788,1.046-2.767c0.002-1.231-0.54-2.365-1.526-3.193 c-0.917-0.77-2.163-1.212-3.421-1.214h-0.48c-0.544-1.238-1.764-1.998-3.243-2c-0.003,0-0.005,0-0.008,0 c-0.972,0-1.808,0.323-2.418,0.933C16.965,3.185,16.642,4.023,16.64,5v20.999c-0.003,1.976,1.378,3.357,3.359,3.361 c0.003,0,0.005,0,0.007,0c1.473,0,2.69-0.76,3.238-2h0.479c0.004,0,0.007,0,0.01,0c1.271,0,2.478-0.426,3.398-1.199 c0.977-0.82,1.515-1.95,1.517-3.182c0.001-0.995-0.526-2.098-1.025-2.791C29.847,19.418,31.357,17.555,31.36,15.5z M20,12.36 c0.353,0,0.64,0.287,0.64,0.64s-0.287,0.64-0.64,0.64s-0.64-0.287-0.64-0.64S19.647,12.36,20,12.36z M26.946,19.64h-2.641 c-0.159-0.575-0.681-1-1.306-1c-0.75,0-1.36,0.61-1.36,1.36s0.61,1.36,1.36,1.36c0.624,0,1.147-0.425,1.306-1h2.533 c0.476,0.541,1.091,1.691,1.089,2.618c-0.001,1.016-0.448,1.95-1.26,2.631c-0.781,0.657-1.865,1.01-2.943,1.03H23 c-0.152,0-0.288,0.097-0.339,0.239c-0.393,1.104-1.385,1.761-2.655,1.761c-0.002,0-0.004,0-0.005,0 c-0.781-0.001-1.445-0.252-1.919-0.725C17.608,27.441,17.358,26.78,17.36,26v-8.64h2.279v6.334c-0.575,0.159-1,0.681-1,1.306 c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36c0-0.624-0.425-1.147-1-1.306V17.36h1.639c0.001,0,0.002,0,0.003,0 c0.799,0,1.356-0.559,1.358-1.36v-0.64h2.334c0.159,0.575,0.681,1,1.306,1c0.75,0,1.36-0.61,1.36-1.36s-0.61-1.36-1.36-1.36 c-0.625,0-1.147,0.425-1.306,1H23.36V8.805c0.575-0.159,1-0.681,1-1.305c0-0.75-0.61-1.36-1.36-1.36s-1.36,0.61-1.36,1.36 c0,0.624,0.425,1.146,1,1.305V16c0,0.401-0.238,0.641-0.638,0.641c-0.001,0-0.001,0-0.002,0h-4.64V5 c0.001-0.781,0.252-1.445,0.725-1.918c0.397-0.398,0.933-0.627,1.555-0.693v9.305c-0.575,0.159-1,0.681-1,1.305 c0,0.75,0.61,1.36,1.36,1.36s1.36-0.61,1.36-1.36c0-0.624-0.425-1.146-1-1.305v-9.31c1.103,0.115,1.951,0.742,2.3,1.736 c0.051,0.144,0.188,0.24,0.34,0.24h0.724c1.092,0.001,2.17,0.383,2.959,1.045c0.82,0.689,1.271,1.626,1.269,2.641 c-0.001,0.966-0.714,2.209-1.205,2.699c-0.092,0.091-0.127,0.225-0.094,0.35c0.034,0.125,0.133,0.222,0.258,0.254 c2.198,0.567,3.732,2.274,3.729,4.151C30.638,17.374,29.12,19.07,26.946,19.64z M23.64,20c0,0.353-0.287,0.64-0.64,0.64 s-0.64-0.287-0.64-0.64s0.287-0.64,0.64-0.64S23.64,19.647,23.64,20z M20,24.36c0.353,0,0.64,0.287,0.64,0.64s-0.287,0.64-0.64,0.64 s-0.64-0.287-0.64-0.64S19.647,24.36,20,24.36z M23,8.14c-0.353,0-0.64-0.287-0.64-0.64S22.647,6.86,23,6.86s0.64,0.287,0.64,0.64 S23.353,8.14,23,8.14z M26.36,15c0-0.353,0.287-0.64,0.64-0.64s0.64,0.287,0.64,0.64s-0.287,0.64-0.64,0.64S26.36,15.353,26.36,15z"></path> </g></svg>
                </div>

                <div className="service_details">
                  <h4>Machine Learning</h4>
                  <p className="font-size-sm text-muted">TensorFlow, PyTorch, Scikit-learn, Keras</p>
                </div>
              </article>

              {/* <!-- Data Analysis & Visualization--> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                  </svg>
                </div>

                <div className="service_details">
                  <h4>Data Analysis & Visualization</h4>
                  <p className="font-size-sm text-muted">Pandas, Numpy, matplotlib, Seaborn, Excel, D3.js</p>
                </div>
              </article>

              {/* <!-- Data Engineering --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
                    <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                  </svg>
                </div>

                <div className="service_details">
                  <h4>Data Engineering</h4>
                  <p className="font-size-sm text-muted">SQL, Ray, ETL Pipelines</p>
                </div>
              </article>

              {/* <!-- Statistics & Mathematics --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>

                <div className="service_details">
                  <h4>Statistics & Mathematics</h4>
                  <p className="font-size-sm text-muted">Probability, Hypothesis Testing, Inference, Linear Algebra, Calculus</p>
                </div>
              </article>

              {/* <!-- Creative Coding & Visual Design --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg stroke="currentColor" fill="currentColor" height="25" width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 430.424 430.424" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_16_" d="M179.954,149.88H72.822c-4.971,0-9-4.029-9-9s4.029-9,9-9h107.132c4.971,0,9,4.029,9,9 S184.925,149.88,179.954,149.88z M170.448,367.105c0,4.971-4.029,9-9,9h-33.887v45.319c0,3.505-2.035,6.691-5.215,8.166 c-1.209,0.561-2.5,0.834-3.784,0.834c-2.091,0-4.16-0.728-5.818-2.132L95.69,413.849l-17.051,14.442 c-2.674,2.265-6.423,2.772-9.602,1.298c-3.18-1.474-5.215-4.66-5.215-8.166v-45.319H21.432c-4.971,0-9-4.029-9-9V27.463 c0-15.142,10.764-27.461,23.995-27.461H286.03c4.971,0,9,4.029,9,9s-4.029,9-9,9H36.427c-2.83,0-5.995,4.046-5.995,9.461v9.464 H286.03c4.971,0,9,4.029,9,9v87.604c0,4.971-4.029,9-9,9s-9-4.029-9-9V54.927H30.432v303.177h131.016 C166.418,358.105,170.448,362.134,170.448,367.105z M109.561,376.105H81.822v25.902l8.051-6.819 c1.678-1.421,3.748-2.132,5.817-2.132c2.069,0,4.138,0.71,5.816,2.132l8.055,6.821V376.105z M417.993,290.484 c0,68.206-55.489,123.694-123.694,123.694s-123.694-55.489-123.694-123.694s55.489-123.695,123.694-123.695 c12.619,0,31.688,0,42.341,15.232c4.517,6.462,12.44,24.063-11.453,47.912c-7.757,7.742-7.769,20.351-0.028,28.108 c7.748,7.748,20.361,7.764,28.11,0.028c15.864-15.833,28.883-17.414,37.012-15.953c9.75,1.753,17.89,8.751,22.921,19.705 C417.412,270.985,417.993,281.013,417.993,290.484z M399.993,290.484c0-8.583-0.535-15.464-3.147-21.15 c-1.77-3.854-4.898-8.629-9.75-9.502c-5.522-0.991-13.022,2.906-21.111,10.978c-14.768,14.74-38.795,14.719-53.561-0.046 c-14.758-14.79-14.734-38.818,0.047-53.57c5.894-5.882,14.954-16.935,9.417-24.857c-4.889-6.991-14.948-7.546-27.589-7.546 c-58.28,0-105.694,47.415-105.694,105.695c0,58.28,47.414,105.694,105.694,105.694C352.579,396.178,399.993,348.764,399.993,290.484 z M326.537,307.03L326.537,307.03C326.537,307.03,326.537,307.029,326.537,307.03L326.537,307.03z M72.822,167.169 c-4.971,0-9,4.029-9,9s4.029,9,9,9H109.1c4.971,0,9-4.029,9-9s-4.029-9-9-9H72.822z M328.704,15.667 c-2.836-2.572-3.734-6.658-2.238-10.182c1.496-3.525,5.046-5.716,8.878-5.465c62.825,4.153,69.792,40.796,68.842,72.256 c0,0,0,0.001,0,0.001c-0.445,14.619-9.971,26.646-22.992,30.539v106.939c0,4.971-4.029,9-9,9s-9-4.029-9-9v-106.85 c-13.431-3.854-23.288-16.249-23.288-30.901c0-4.136,0.032-7.969,0.063-11.537C340.199,33.262,339.801,25.731,328.704,15.667z M354.185,21.047c4.029,10.581,3.925,22.75,3.784,39.573c-0.03,3.521-0.062,7.302-0.062,11.384c0,7.797,6.344,14.141,14.142,14.141 c7.686,0,13.899-6.331,14.146-14.413C386.841,50.313,384.538,29.127,354.185,21.047z M257.361,318.439 c-4.841,4.831-11.271,7.491-18.108,7.491c-0.009,0-0.017,0-0.025,0c-6.847-0.007-13.281-2.679-18.117-7.525 c-9.984-10.002-9.968-26.264,0.035-36.248c10.003-9.984,26.265-9.968,36.25,0.033C267.378,292.192,267.363,308.454,257.361,318.439z M244.655,294.906c-1.488-1.491-3.445-2.236-5.402-2.236c-1.952,0-3.904,0.742-5.392,2.227c0,0,0,0,0,0 c-2.978,2.973-2.983,7.814-0.01,10.792c1.44,1.443,3.355,2.239,5.394,2.241c0.002,0,0.005,0,0.008,0c2.036,0,3.95-0.792,5.391-2.23 C247.622,302.727,247.627,297.884,244.655,294.906z M302.522,327.404c9.984,10.005,9.968,26.266-0.035,36.25 c-4.995,4.985-11.552,7.478-18.107,7.478c-6.572,0-13.144-2.504-18.142-7.513c-4.837-4.845-7.498-11.285-7.491-18.131 c0.006-6.846,2.679-13.28,7.525-18.117C276.277,317.385,292.538,317.4,302.522,327.404z M289.782,340.119 c-2.973-2.978-7.815-2.982-10.793-0.009c-1.443,1.44-2.239,3.356-2.241,5.394s0.791,3.955,2.231,5.398 c2.973,2.979,7.814,2.984,10.793,0.011C292.75,347.941,292.755,343.098,289.782,340.119z M72.822,114.594H158.1c4.971,0,9-4.029,9-9 s-4.029-9-9-9H72.822c-4.971,0-9,4.029-9,9S67.851,114.594,72.822,114.594z M239.452,256.063c-4.836-4.845-7.497-11.285-7.49-18.131 c0.007-6.846,2.679-13.281,7.526-18.118c10.002-9.983,26.264-9.968,36.248,0.034c4.836,4.845,7.498,11.285,7.491,18.131 c-0.006,6.846-2.678,13.281-7.523,18.118c-4.84,4.831-11.27,7.491-18.107,7.491c-0.009,0-0.018,0-0.026,0 C250.723,263.581,244.288,260.909,239.452,256.063z M249.962,237.949c-0.001,2.038,0.791,3.956,2.231,5.398 c1.44,1.443,3.355,2.239,5.395,2.241c0.002,0,0.005,0,0.008,0c2.036,0,3.95-0.792,5.392-2.23c1.442-1.439,2.238-3.355,2.24-5.394 s-0.791-3.956-2.231-5.399c-1.488-1.491-3.444-2.236-5.401-2.236c-1.952,0-3.904,0.742-5.392,2.227l0,0 C250.76,233.995,249.964,235.911,249.962,237.949z M362.788,307.064c9.984,10.003,9.968,26.265-0.036,36.249 c-4.839,4.831-11.269,7.49-18.106,7.49c-0.008,0-0.016,0-0.024,0c-6.847-0.006-13.281-2.679-18.118-7.525 c-9.983-10.004-9.968-26.265,0.034-36.249c4.839-4.831,11.27-7.491,18.107-7.491c0.008,0,0.016,0,0.024,0 C351.516,299.545,357.95,302.218,362.788,307.064z M352.277,325.178c0.002-2.038-0.79-3.955-2.23-5.398 c-1.44-1.443-3.356-2.239-5.396-2.241c-0.002,0-0.005,0-0.007,0c-2.036,0-3.95,0.792-5.391,2.23c0,0,0,0,0,0 c-2.978,2.973-2.982,7.815-0.009,10.794c1.439,1.442,3.355,2.238,5.393,2.24c0.002,0,0.005,0,0.007,0c2.036,0,3.95-0.792,5.391-2.23 C351.479,329.132,352.275,327.216,352.277,325.178z"></path> </g></svg>
                </div>

                <div className="service_details">
                  <h4>Creative Coding & Visual Design</h4>
                  <p className="font-size-sm text-muted">p5.js, TouchDesigner, Adobe Creative Suite (Photoshop, Illustrator), Rhino/Grasshopper, Figma</p>
                </div>
              </article>

              {/* <!-- Web Development --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg stroke="currentColor" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 419.931 419.931" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"></path> <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327 c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336 c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z"></path> <g> <path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z"></path> <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"></path> <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z"></path> </g> </g> </g> </g> </g></svg>
                </div>

                <div className="service_details">
                  <h4>Web Development</h4>
                  <p className="font-size-sm text-muted">HTML/CSS, JavaScript (Three.js, D3.js), React, Node.js, Django</p>
                </div>
              </article>

              {/* <!-- Mobile Development --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                </div>

                <div className="service_details">
                  <h4>Mobile Development</h4>
                  <p className="font-size-sm text-muted">iOS Development (Swift), Android Development (Kotlin), React Native</p>
                </div>
              </article>

              {/* <!-- Physical Computing --> */}
              <article className="special_card service light">
                <div className="service_icon">
                  <svg stroke="currentColor" fill="currentColor" width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-l</title><path d="M352,128H160a32,32,0,0,0-32,32V352a32,32,0,0,0,32,32H352a32,32,0,0,0,32-32V160A32,32,0,0,0,352,128Zm0,216a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H344a8,8,0,0,1,8,8Z"></path><rect x="160" y="160" width="192" height="192" rx="8" ry="8"></rect><path d="M464,192a16,16,0,0,0,0-32H448V128a64.07,64.07,0,0,0-64-64H352V48a16,16,0,0,0-32,0V64H272V48a16,16,0,0,0-32,0V64H192V48a16,16,0,0,0-32,0V64H128a64.07,64.07,0,0,0-64,64v32H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v32a64.07,64.07,0,0,0,64,64h32v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h32a64.07,64.07,0,0,0,64-64V352h16a16,16,0,0,0,0-32H448V272h16a16,16,0,0,0,0-32H448V192ZM384,352a32,32,0,0,1-32,32H160a32,32,0,0,1-32-32V160a32,32,0,0,1,32-32H352a32,32,0,0,1,32,32Z"></path></g></svg>
                </div>

                <div className="service_details">
                  <h4>Physical Computing</h4>
                  <p className="font-size-sm text-muted">Arduino, Raspberry Pi, Sensor Integration, Robotics, Internet of Things (IoT), TinyML</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experiences" className="pt-8 pt-md-11" tabIndex="-1" style={{ outline: 'none' }}>
          {/* <!-- Header --> */}
          <div className="container">
            {/* <!-- Experiences Header --> */}
            <div className="row">
              <div className="col-12 col-md-10 col-lg-8">

                {/* <!-- Preheading --> */}
                <h3 className="text-uppercase font-weight-bold">Experiences</h3>

              </div>
            </div> {/* <!-- / .row --> */}
          </div> {/* <!-- / .container --> */}

          {/* <!-- Apprentice --> */}
          <div className="container pt-6 pt-md-8 pb-6 pb-md-8 pb-lg-10">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 col-lg-5">

                {/* <!-- Badge --> */}
                <span className="badge badge-pill badge-primary-desat-soft mb-3">
                  <span className="h6 text-uppercase">Apprentice</span>
                </span>

                <h4><span>UCLA Break Through Tech AI</span></h4>
                <p className="font-size-sm text-muted mb-5">May 2024 – April 2025</p>
                <p>
                  Engaged in developing diverse <span className="badge-primary-desat-soft font-weight-bold">machine learning models</span>, including ensemble regression, computer vision, and NLP systems, to tackle complex business challenges using <span className="badge-primary-desat-soft font-weight-bold">large-scale, real-world datasets</span>. Worked collaboratively with cross-functional teams to implement and optimize multiple <span className="badge-primary-desat-soft font-weight-bold">neural network architectures</span>, gaining valuable experience in applying cutting-edge AI techniques to solve practical problems across various domains.
                </p>

              </div>
              <div className="col-12 col-md-6">

                {/* <!-- Image --> */}
                <div className="img-skewed img-skewed-left mb-8 mb-md-0">
                  <img src={Apprentice} alt="..." className="screenshot img-fluid mw-md-90 aos-init aos-animate" data-aos="img-skewed-item-left" data-aos-delay="100"></img>
                </div>

              </div>
            </div> {/* <!-- / .row --> */}
          </div> {/* <!-- / .container --> */}

          {/* <!-- UC San Diego Design Lab--> */}
          <div className="container pt-6 pt-md-8 pb-6 pb-md-8 pb-lg-10">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6">

                {/* <!-- Image --> */}
                <div className="img-skewed img-skewed-right mb-8 mb-md-0">
                  <img src={DesignLab_work} alt="..." className="screenshot img-fluid mw-md-90 aos-init aos-animate" data-aos="img-skewed-item-right" data-aos-delay="100"></img>
                </div>



              </div>
              <div className="col-12 col-md-6 col-lg-5">

                {/* <!-- Badge --> */}
                <span className="badge badge-success-soft badge-pill mb-3">
                  <span className="h6 text-uppercase">Student Intern</span>
                </span>

                <h4><span>UC San Diego Design Lab</span></h4>
                <p className="font-size-sm text-muted mb-5">June 2023 – May 2024</p>

                <p>
                  Contributed to an interactive public installation at UC San Diego Park & Market, part of a <a href="https://www.baytoparkpaseo.org/" target="_blank" className="hyperlink-custom">1.7-mile temporary pedestrian experience from Bay to Balboa Park</a> in San Diego. Engineered the <span className="badge-success-soft font-weight-bold">integration of voice playback modules</span> with interactive buttons, while collaborating with <span className="badge-success-soft font-weight-bold">cross-disciplinary academics</span> to create compelling <span className="badge-success-soft font-weight-bold">physical and digital art installations</span> that promoted design thinking and raised awareness about the housing crisis. <a href="https://storiesunsheltered.ucsd.edu/about" target="_blank" className="hyperlink-custom">Learn more</a>
                </p>


              </div>
            </div>

          </div>

          {/* <!-- CodeDay --> */}
          <div className="container pt-6 pt-md-8 pb-6 pb-md-8 pb-lg-10">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 col-lg-5">

                {/* <!-- Badge --> */}
                <span className="badge badge-pill badge-orange-soft mb-3">
                  <span className="h6 text-uppercase">software engineer Intern</span>
                </span>

                <h4><span>CodeDay</span></h4>
                <p className="font-size-sm text-muted mb-5">June 2023 – August 2023</p>

                <p>
                  Contributed to an <span className="badge-orange-soft font-weight-bold">open-source project</span> by optimizing <span className="badge-orange-soft font-weight-bold">AWS S3 file organization</span> through
                  user-friendly tagging and implementing a custom API for seamless <span className="badge-orange-soft font-weight-bold">CRUD operations</span> on
                  file metadata. Collaborated with front-end engineers to integrate AWS S3 for an effective
                  <span className="badge-orange-soft font-weight-bold"> file management solution</span>, while conducting <span className="badge-orange-soft font-weight-bold">cross-cloud compatibility tests</span> to
                  enhance system reliability. <a href="https://www.linkedin.com/pulse/open-source-experience-firefiles-object-tagging-filtering-cao/?trackingId=trQHV4bRSYqPbIrHiTThIg%3D%3D" target="_blank" className="hyperlink-custom">Learn more</a>
                </p>


              </div>
              <div className="col-12 col-md-6">

                {/* <!-- Image --> */}
                <div className="img-skewed img-skewed-left mb-8 mb-md-0">
                  <img src={CodeDay_work} alt="..." className="screenshot img-fluid mw-md-90 aos-init aos-animate" data-aos="img-skewed-item-left" data-aos-delay="100"></img>
                </div>
              </div>
            </div> {/* <!-- / .row --> */}
          </div> {/* <!-- / .container --> */}

          {/* <!-- 3D Modeler--> */}
          <div className="container pt-6 pt-md-8 pb-6">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6">

                {/* <!-- Image --> */}
                <div className="img-skewed img-skewed-right mb-8 mb-md-0">
                  <img src={modeling_work} alt="..." className="screenshot img-fluid mw-md-90 aos-init aos-animate" data-aos="img-skewed-item-right" data-aos-delay="100"></img>
                </div>

              </div>

              <div className="col-12 col-md-6 col-lg-5">

                {/* <!-- Badge --> */}
                <span className="badge badge-red-soft badge-pill mb-3">
                  <span className="h6 text-uppercase">3D Modeler</span>
                </span>


                <h4><span>Qualcomm Institute – UC San Diego Division of Calit2</span></h4>


                <p className="font-size-sm text-muted mb-5">April 2023 – June 2023</p>


                <p>
                  Modeled and optimized <span className="badge-red-soft font-weight-bold">3D assets</span> for the <a href="https://aquarium.ucsd.edu/" target="_blank" className="hyperlink-custom">Birch Aquarium</a> Digital Museum,
                  utilizing <a href="https://cyberarch.pages.nrp-nautilus.io/cyberarchweb/" target="_blank" className="hyperlink-custom">CyberArchWarehouses'</a> digital museum tools to create an
                  immersive virtual experience. Processed <span className="badge-red-soft font-weight-bold">LiDAR scans and photogrammetric data</span> to generate accurate 3D models of aquarium exhibits,
                  contributing to the creation of a comprehensive <span className="badge-red-soft font-weight-bold">building information modeling (BIM) model and living digital twin</span> of the facility.
                </p>


              </div>
            </div>

          </div>


        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About;