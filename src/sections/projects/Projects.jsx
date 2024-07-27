import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };

    const handleSkillChange = (e) => {
        const skill = e.target.value;
        setSelectedSkills((prevSkills) =>
        prevSkills.includes(skill)
            ? prevSkills.filter((s) => s !== skill)
            : [...prevSkills, skill]
        );
    };

    // const filteredProjects = projects.filter((project) => {
    //     const yearMatch = selectedYear ? project.year === parseInt(selectedYear) : true;
    //     const fieldMatch = selectedField ? project.field === selectedField : true;
    //     const skillsMatch = selectedSkills.length
    //     ? selectedSkills.every((skill) => project.skills.includes(skill))
    //     : true;

    //     return yearMatch && fieldMatch && skillsMatch;
    // });

    return (
        <div>
            <Navbar />
            <main className='container'>
                <div className="container">
                    {/* <!-- Discovery Projects Header --> */}
                    <div className="row">

                        {/* <!-- Preheading --> */}
                        <h2 className="text-capitalize font-weight-bold">Discovery Projects</h2>
                        <p>Welcome to a showcase of all my projects that are both innovative and interesting, and in which I have been involved. Here, you will find projects that often blend technology and creativity, and serve as a testament to the endless possibilities that can be achieved through dedication and a curious mindset. These projects range from coding experiments and data visualizations to creative content and community initiatives. They reflect my passion for learning, creating, and contributing positively to the world around me. Feel free to explore and reach out if you'd like to collaborate or learn more!</p>

                    </div> {/* <!-- / .row --> */}
                </div> {/* <!-- / .container --> */}

                <div className="container mt-5">
                    {/* <!-- Year Section --> */}
                    <div className="row">
                        <div className="mb-3">
                            <h4>Year</h4>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="all-year"/>All
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2024"/>2024
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2023"/>2023
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2022"/>2022
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2021"/>2021
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Field of Study Section --> */}
                    <div className="row">
                        <div className="mb-3">
                            <h4>Field of Study</h4>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="all-study"/>All
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="computer-science"/>Computer Science
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="data-science"/>Data Science
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="art"/>Art
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Transferable Skills */}
                    <div className='row'>
                        <div className='mb-3'>
                            <h4>Transferable Skills</h4>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <div className="btn-group-toggle" data-toggle="buttons">
                                {[ 'None', 'Problem-Solving', 'Creativity', 'Communication', 'Collaboration', 'Critical Thinking', 'Time Management', 'Learning Agility', 'Technical Proficiency'].map((skill) => (
                                    <label key={skill} className="btn btn-sm btn-white font-weight-normal category-btn mr-2 mb-3">
                                    <input
                                        type="checkbox"
                                        value={skill}
                                        className="btn-checkbox"
                                        autoComplete="off"
                                        checked={selectedSkills.includes(skill)}
                                        onChange={handleSkillChange}
                                    /> {skill}
                                    </label>
                                ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Projects