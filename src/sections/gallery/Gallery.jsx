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
               
            </main>
            <Footer/>
        </div>
    )
}

export default Projects