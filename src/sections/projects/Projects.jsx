import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';

import projects from './projects_data.json';
import '../../assets/styles/portfolio.css';
import '../../assets/styles/special_card.css';



const Projects = () => {
    useEffect(() => {
        document.title = "Projects - Kaleo Cao";
    }, [])


    const [filters, setFilters] = useState({
        year: ['all'],
        field_of_study: ['all'],
        transferable_skills: ['none'],
    });



    const handleFilterClick = (filterType, filterValue) => {
        setFilters(prevFilters => {
            let newValues = [...prevFilters[filterType]];

            if (filterValue === 'all' || filterValue === 'none') {
                newValues = [filterValue];
            } else {
                if (newValues.includes(filterValue)) {
                    newValues = newValues.filter(item => item !== filterValue);
                } else {
                    newValues = newValues.filter(item => item !== 'all' && item !== 'none');
                    newValues.push(filterValue);
                }

                if (newValues.length === 0) {
                    newValues = filterType === 'transferable_skills' ? ['none'] : ['all'];
                }
            }

            return {
                ...prevFilters,
                [filterType]: newValues,
            };
        });
    };

    const filterProjects = () => {
        return projects.filter(project => {
            const yearMatch = filters.year.includes('all') || filters.year.includes(project.year.toString());
            const studyMatch = filters.field_of_study.includes('all') || filters.field_of_study.includes(project.field_of_study);
            const skillsMatch = filters.transferable_skills.includes('none') || filters.transferable_skills.some(skill => project.transferable_skills.includes(skill));
            return yearMatch && studyMatch && skillsMatch;
        });
    };

    const filteredProjects = filterProjects();



    return (
        <div>
            <Navbar />
            <main className='container'>
                <div className="container">
                    {/* <!-- Discovery Projects Header --> */}


                    {/* <!-- Preheading --> */}
                    <h2 className="text-capitalize font-weight-bold">Discovery Projects</h2>
                    <p>Welcome to a showcase of all my projects that are both innovative and interesting, and in which I have been involved. Here, you will find projects that often blend technology and creativity, and serve as a testament to the endless possibilities that can be achieved through dedication and a curious mindset. These projects range from coding experiments and data visualizations to creative content and community initiatives. They reflect my passion for learning, creating, and contributing positively to the world around me. Feel free to explore and reach out if you'd like to collaborate or learn more!</p>


                </div> {/* <!-- / .container --> */}

                <div className="container mt-5">
                    {/* <!-- Year Section --> */}

                    <div className="mb-3">
                        <h4>Year</h4>
                        {/* <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="all-year" />All
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2024" />2024
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2023" />2023
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2022" />2022
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="2021" />2021
                                </label>
                            </div> */}
                        <button
                            className="btn btn-sm btn-white fw-normal fs-6 mr-2 mb-2"
                            onClick={() => handleFilterClick('year', 'all')}
                            style={{ backgroundColor: filters.year.includes('all') ? '#cae9be' : '' }}
                        >
                            All
                        </button>
                        {[2024, 2023, 2022, 2021].map(year => (
                            <button
                                key={year}
                                className="btn btn-sm btn-white font-weight-normal fs-6 mr-2 mb-2"
                                onClick={() => handleFilterClick('year', year.toString())}
                                style={{ backgroundColor: filters.year.includes(year.toString()) ? '#cae9be' : '' }}
                            >
                                {year}
                            </button>
                        ))}



                    </div>


                    {/* <!-- Field of Study Section --> */}

                    <div className="mb-3">
                        <h4>Field of Study</h4>
                        {/* <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="all-study" />All
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="computer-science" />Computer Science
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="data-science" />Data Science
                                </label>
                                <label className="btn btn-sm btn-white font-weight-normal mr-2 mb-2">
                                    <input type="checkbox" className="btn-checkbox" autoComplete="off" value="art" />Art
                                </label>
                            </div> */}

                        <button
                            className="btn btn-sm btn-white font-weight-normal fs-6 mr-2 mb-2"
                            onClick={() => handleFilterClick('field_of_study', 'all')}
                            style={{ backgroundColor: filters.field_of_study.includes('all') ? '#cae9be' : '' }}
                        >
                            All
                        </button>
                        {['computer-science', 'data-science', 'art'].map(field => (
                            <button
                                key={field}
                                className="btn btn-sm btn-white text-capitalize font-weight-normal fs-6 mr-2 mb-2"
                                onClick={() => handleFilterClick('field_of_study', field)}
                                style={{ backgroundColor: filters.field_of_study.includes(field) ? '#cae9be' : '' }}
                            >
                                {field.replace('-', ' ')}
                            </button>
                        ))}
                    </div>


                    {/* Transferable Skills */}

                    <div className='mb-3'>
                        <h4>Transferable Skills</h4>
                        {/* <div className="btn-group-toggle" data-toggle="buttons">
                                <div className="btn-group-toggle" data-toggle="buttons">
                                    {['None', 'Problem-Solving', 'Creativity', 'Communication', 'Collaboration', 'Critical Thinking', 'Learning Agility'].map((skill) => (
                                        <label key={skill} className="btn btn-sm btn-white font-weight-normal mr-2 mb-3">
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


                            </div> */}
                        <button
                            className="btn btn-sm btn-white font-weight-normal mr-2 mb-2 fs-6"
                            onClick={() => handleFilterClick('transferable_skills', 'none')}
                            style={{ backgroundColor: filters.transferable_skills.includes('none') ? '#cae9be' : '' }}
                        >
                            None
                        </button>
                        {['problem-solving', 'creative', 'communication', 'collaboration', 'critical-thinking', 'learning-agility'].map(skill => (
                            <button
                                key={skill}
                                className="btn btn-sm btn-white font-weight-normal text-capitalize mr-2 mb-2 fs-6"
                                onClick={() => handleFilterClick('transferable_skills', skill)}
                                style={{ backgroundColor: filters.transferable_skills.includes(skill) ? '#cae9be' : '' }}
                            >
                                {skill.replace('-', ' ')}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="container">
                    <div className="mb-2">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 align-items-stretch g-4 py-5">
                            {filteredProjects.map((project, index) => (
                                <div className="col pb-5" key={index} data-year={project.year} data-study={project.field_of_study}>
                                    <div className="special_card portfolio_project h-100 overflow-hidden rounded-5 shadow-lg">
                                        <div className="portfolio_project-image">
                                            <img src={project.image} alt="Portfolio Project Image" />
                                        </div>
                                        <h5>{project.title}</h5>
                                        {project.badges.map((badge, idx) => (
                                            <a key={idx} href={badge.link} target='_blank' className={`badge badge-${badge.type} mb-3 text-capitalize ${idx < project.badges.length - 1 ? 'mr-3' : ''}`}>
                                                {badge.type.replace('-', ' ')}
                                            </a>
                                        ))}
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Projects