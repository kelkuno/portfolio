import React from 'react';
import { useHistory } from 'react-router-dom';


function Projects() {

    const history = useHistory();

    const handleBtn = () => {
        history.push('/photo-palette');
    }
    const handleBtn2 = () => {
        history.push('/employee-tracker');
    }

    return (
        <div className="projects">
            <div className="container">
                <img src='./photo-palette-cover.webp' alt="photo-palette" />
                <button
                    onClick={handleBtn}
                    className="btn"
                >
                    Photo Palette Generator App
                </button>
            </div>
            <div className="container">
                <img src='./ilcs-project.webp' alt="employee-time-tracker-cover-photo" />
                <button
                    onClick={handleBtn2}
                >
                    Employee Time Tracker App
                </button>
            </div>

        </div>

    );
}

export default Projects;