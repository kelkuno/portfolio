import React from 'react';
import { Link } from "react-router-dom";
// import background from "./multi-dimensional.jpg";




function Home() {
    return (

        <>
            <div className="main-nav">
                <Link to="/about" className="content">About</Link>
                <Link to="/resume" className="content">Resume</Link>
                <Link to="/projects" className="content">Projects</Link>
            </div>
        </>
    );
}

export default Home;