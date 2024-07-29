import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';
import Footer from '../../footer/Footer';

import current_state_one from '/assets/img/icam_project_current_state_1.gif';

const GalacticDreamscape = () => {

    useEffect(() => {
        document.title = "Galactic Dreamscape [2024] - Kaleo Cao";
    }, [])

    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalize font-weight-bolder">Galactic Dreamscape [2024]</h2>
                    </div>



                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: TouchDesigner, Kinect/Leap Motion
                    </div>

                </div>

                <section id="goal">
                    <div className="container">
                        <h3 className="text-capitalize font-weight-bold">Goal</h3>
                        <p >
                            Creating an immersive experience that transports participants into a fantastical space exploration journey. Using cutting-edge technology, the installation combines particle effects, fluid simulations, human body movement, and NASA datasets to generate a dynamic and interactive visual environment. Through the integration of machine learning, participants’ movements will interact with cosmic visuals, creating a symbiotic relationship between the human body and the universe.
                        </p>
                    </div>
                </section>

                <section id="current_state">
                    <div className="container py-4">

                        <h3 className="text-capitalize font-weight-bold">Current State</h3>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={current_state_one} style={{ width: '50vw', height: 'auto', borderRadius: '10px' }} alt="description" />
                        </div>

                    </div>
                </section>

                <section id="timeline" className="timeline_area section_padding_130 py-4">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-sm-8 col-lg-6">
                                <h3 className="text-capitalize font-weight-bold">Timeline</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* Timeline Area */}
                                <div className="apland-timeline-area">
                                    {/* Week 1 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 1</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 1.1</h5>
                                                        <p>Finalize project proposal</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 1.2</h5>
                                                        <p>Install TouchDesigner, Stable Diffusion, and other necessary software</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 1.3</h5>
                                                        <p>Set up development environment</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 2 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 2</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 2.1</h5>
                                                        <p>Learn TouchDesigner basic (tutorial, practice projects)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 2.2</h5>
                                                        <p>Find and download relevant NASA dataset</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 2.3</h5>
                                                        <p>Refine and detail the project timeline</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 3 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 3</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 3.1</h5>
                                                        <p>Continue learning advanced TouchDesigner techniques (particle effects and fluid simulation)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 3.2</h5>
                                                        <p>Clean and preprocessing NASA dataset for integration</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 3.3</h5>
                                                        <p>Research three relevant interactive art installation for inspiration</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 4 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 4</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 4.1</h5>
                                                        <p>Begin drafting the project framework in TouchDesigner</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 4.2</h5>
                                                        <p>Start building the project website to document progress</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* Week 5 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 5</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 5.1</h5>
                                                        <p>Present project progress</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 5.2</h5>
                                                        <p>Update the project proposal</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 5.3</h5>
                                                        <p>Experiment with initial visual element using NASA data</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 5.4</h5>
                                                        <p>Continue refining TouchDesigner visuals and interactions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 6 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 6</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 6.1</h5>
                                                        <p>Implement Kinect/Leap Motion integration for tracking human movement</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 6.2</h5>
                                                        <p>Develop basic interactive component (particle effects reacting to movement)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 7 & 8*/}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 7 & 8</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 7-8.1</h5>
                                                        <p>Start integrating cleaned NASA datasets into the project</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 7-8.2</h5>
                                                        <p>Refine interactive elements based on testing and feedback</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 7-8.3</h5>
                                                        <p>Continue integrating and testing NASA data within the visual elements</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Week 9 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 9</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 9.1</h5>
                                                        <p>Finalize all visual and interactive elements</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>

                                                    <div className="timeline-text">
                                                        <h5>Task 9.2</h5>
                                                        <p>Prepare final presentation materials</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Week 10 */}
                                    <div className="single-timeline-area">
                                        <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                                            <p>Week 10</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 10.1</h5>
                                                        <p>Complete the project website with documentation</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 10.2</h5>
                                                        <p>Setup the installation </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-4">
                                                <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                                                    <div className="timeline-text">
                                                        <h5>Task 10.3</h5>
                                                        <p>Deliver final presentation</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="nextsteps">
                    <div className="container py-4">
                        <h3 className="text-capitalize font-weight-bold">Next Steps</h3>
                        <ul className="list-bullet">
                            <li>
                                <strong>Human Face Detection and Alien Generation:</strong> Utilize TouchDesigner and ComfyUI or Stable Diffusion to generate an alien image based on the participant's face.
                            </li>
                            <li>
                                <strong>Space Landscape Generation:</strong> Use space images to create dynamic and immersive space landscapes.
                            </li>
                            <li>
                                <strong>Interactive Particle System:</strong> Develop a particle system that reacts to human movement, creating trails and shapes mimicking cosmic dust, energy flows, and nebula formations.
                            </li>
                            <li>
                                <strong>Zero Gravity Simulation:</strong> Use fluid simulation techniques to simulate the grace of astronauts floating in zero gravity.
                            </li>

                            <li>
                            <strong>Design Workflow in TouchDesigner:</strong> Develop the final workflow design in TouchDesigner, detailing how each component connects and interacts.
                            </li>

                            <li>
                            <strong>Integrate NASA Image Dataset:</strong> Incorporate NASA's image dataset and brainstorm creative ways to present these images meaningfully within the installation.
                            </li>

                            <li>
                            <strong>AI Integration:</strong> Aim for 60-70% of the project to be controlled by AI tools and algorithms.
                            </li>
                        </ul>


                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default GalacticDreamscape