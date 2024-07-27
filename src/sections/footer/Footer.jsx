import React, { useEffect, useState } from 'react';
import LinkedIn from '/assets/img/linkedin_icon.svg';
import Github from '/assets/img/github_icon.svg';
import Gamil from '/assets/img/gmail_icon.svg';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, []);

    return (
        <div className="container mt-6 pt-6">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-5 mb-0 text-body-secondary">&copy; <span id="current-year">{currentYear}</span> Yuancheng Cao. All rights reserved.</p>

  
                <ul className="nav col-md-5 justify-content-end social-icons-list w-list-unstyled">
                    <li className="list-item">
                        <a href="https://www.linkedin.com/in/cyc2025/" target="_blank" className="footersocialicons w-inline-block">
                            <img src={LinkedIn} alt="LinkedIn" className="social-icon"></img>
                        </a>
                    </li>

                    <li className="list-item">
                        <a href="https://github.com/Cao1224" target="_blank" className="footersocialicons w-inline-block">
                            <img src={Github} alt="GitHub" className="social-icon"></img>
                        </a>
                    </li>

                    <li className="list-item">
                        <a href="mailto: yuc094@ucsd.edu" target="_blank" className="footersocialicons w-inline-block">
                            <img src={Gamil} alt="Email" className="social-icon"></img>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer