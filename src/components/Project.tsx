import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Bryan-Asanovic/CalculatorAppMAUI" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bryan-Asanovic/CalculatorAppMAUI" target="_blank" rel="noreferrer"><h2>Calculator</h2></a>
                <p>Developed a Calculator application using C# MAUI, which includes basic arithmetic operations, a user-friendly interface, and real-time calculation updates.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Bryan-Asanovic/BookStore" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bryan-Asanovic/BookStore" target="_blank" rel="noreferrer"><h2>Bookstore</h2></a>
                <p>Developed a Bookstore application where you can add/edit/delete different category's, book covers and books. It was made using C# Asp.NET MVC.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Bryan-Asanovic/Weerbericht" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Bryan-Asanovic/Weerbericht" target="_blank" rel="noreferrer"><h2>Weather application</h2></a>
                <p>Developed a Weather application using C# Razor pages, which allows users to view current weather conditions, forecasts, and historical data for various locations. The application integrates with external weather APIs to provide accurate and up-to-date information.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;