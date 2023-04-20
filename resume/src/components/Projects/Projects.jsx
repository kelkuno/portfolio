import React from 'react';
import { useHistory } from 'react-router-dom';


function Projects() {

    const history = useHistory();

    const handleBtn = () => {
        console.log("sup button");
        history.push('/photo-palette');

    }

    return (
        <div className="projects">
            <div className="container">
                <img src='./photo-palette-cover.png' alt="photo-palette" />
                <button
                    onClick={handleBtn}
                    className="btn"
                >
                    Photo Palette
                </button>
            </div>
            <div className="container">
                <img src='./photo-palette-cover.png' alt="photo-palette" />
                <button
                    onClick={handleBtn}
                    className="btn"
                >
                    Photo Palette
                </button>
            </div>

        </div>

    );
}

export default Projects;