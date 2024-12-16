import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faGithubSquare, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsBackend = [
    "C#",
    ".NET",
    "ASP.NET",
    "PHP",
    "Entity Framework",
    "SQL Server",
    "REST API",
    "Azure"
];

const labelsFrontend = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML5",
    "CSS3",
    "Babel"
];

const labelsProjectManagement = [
    "Git",
    "GitHub",
    "DevOps",
    "Azure DevOps",
    "Agile",
    "Scrum",
    "Kanban"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I specialize in building robust and scalable backend systems using C# and .NET technologies. My expertise includes designing and implementing RESTful APIs, working with databases, and deploying applications to the cloud.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsBackend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJs} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>I create dynamic and responsive user interfaces using modern JavaScript frameworks and libraries. My skills include building single-page applications, optimizing performance, and ensuring cross-browser compatibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFrontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
                    <h3>Project Management & DevOps</h3>
                    <p>I have extensive experience in managing projects and implementing DevOps practices to streamline development workflows. I ensure continuous integration and delivery, automate deployments, and maintain high-quality standards.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsProjectManagement.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;