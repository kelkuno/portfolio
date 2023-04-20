import React from 'react';


function Projects() {

    const handleBtn = () => {
        console.log("sup button");
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