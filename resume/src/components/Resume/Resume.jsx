import React from 'react';

import { useHistory } from 'react-router-dom';




function Resume() {

    const history = useHistory();

    const routeHome = () => {
        alert("You are headed to animals");
        ///CHANGE LOCATION???
        history.push('/about');
    };
    return (
        <div className="resume-container">
            <div className="skills">
                <div className="content-blocks">
                    <h2>Skills</h2>
                    <div className="block">
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>jQuery</div>
                        <div>React</div>
                        <div>JavaScript</div>
                        <div>Redux</div>
                        <div>SQL</div>
                        <div>Express</div>
                        <div>NodeJS</div>
                        <div>Git</div>
                    </div>
                    <div className="block">
                        <div>Adobe After Effects</div>
                        <div>Adobe Premiere</div>
                        <div>Adobe InDesign</div>
                        <div>Adobe Illustrator</div>
                        <div>Adobe Photoshop</div>
                        <div>Adobe XD</div>
                        <div>Typography</div>
                        <div>Design Layout</div>
                        <div>Motion Design</div>
                    </div>
                </div>
            </div>
            <div className="resume-content">
                <div className="content-blocks">
                    <h2>Experience</h2>
                    <div className="block">
                        <h3>Front End Designer</h3>
                        <div className="employment-info">
                            <span>Wand Corp, </span>
                            <span>November 2022 - December 2022</span>
                        </div>
                        <ul className="bullets">
                            <li>I built the front end of the digital menu web applications for a variety of clients.</li>
                            <li>I wrote in HTML, CSS and JavaScript.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h3>Full-Stack Software Engineering Student</h3>
                        <div className="employment-info">
                            <span>Prime Digital Academy, </span>
                            <span>June 2022 - October 2022</span>
                        </div>
                        <div>
                            <span className="underline">Group Project: </span>
                            <a href="https://github.com/kelkuno/ilcs-client-project"
                                target="blank">
                                Employee Time Tracking App
                            </a>
                        </div>
                        <ul className="bullets">
                            <li>Collaborated with a local company and my team to create a full CRUD application for tracking employee shifts.</li>
                            <li>Our app included shift tracking features for the employees and the company admin; This app had an employee side and an admin side each built with custom functionality.</li>
                            <li>I built a full CRUD feature on the admin side, which allowed the admin to add, remove and update a new client to the company database.</li>
                            <li>I also built the email notification feature using Sendgrid, which triggered an email notification to both the admin and the employee upon submitting a time sheet.</li>
                        </ul>
                        <div>
                            <span className="underline">Solo Project: </span>
                            <a href="https://github.com/kelkuno/photo-palette"
                                target="blank">
                                Photo Palette Generator App
                            </a>
                        </div>
                        <ul className="bullets">
                            <li>Created a full-stack React application that allows artists and designers to create, customize and save image generated color palettes for later use.</li>
                            <li>I built this app using Node, Express, React, Redux, Redux-Saga, React libraries (React-color-extractor, React-colorful), SQL, Postgresql, Heroku, CSS.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h3>Creative Business Owner</h3>
                        <div className="employment-info">
                            <span>Kelsey Kuno Designs, </span>
                            <span>August 2017 - current</span>
                        </div>
                        <div><span className="underline">Artist</span></div>
                        <ul className="bullets">
                            <li>Created and sold 50+ original <a href="https://www.kelseykuno.com/" target="blank">abstract oil paintings,</a> many of which were commissioned paintings for clients.</li>
                            <li>Actively listened and communicated with painting commission clients to determine artwork size, materials, color palette, design elements and project timeline.</li>
                        </ul>
                        <div><span className="underline">Freelance Designer</span></div>
                        <ul className="bullets">
                            <li>Designed social media focused <a href="https://www.kelseykuno.com/comedy" target="blank">marketing materials</a> for professional comedian Ali Sultan. Projects include: comedy tour posters; <a href="https://www.kelseykuno.com/podcast-1" target="blank">podcast branding</a>; <a href="https://www.kelseykuno.com/homes-spice-project" target="blank">motion design graphics</a>; 2 album covers</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h3>Gift Packer, Shift Lead</h3>
                        <div className="employment-info">
                            <span>Minny & Paul, </span>
                            <span>August 2020 - June 2022</span>
                        </div>
                        <ul className="bullets">
                            <li>Responsible for packing and shipping custom gift boxes for corporate clients, ensuring each box met company quality standards.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h3>Executive Office & Administrative Specialist</h3>
                        <div className="employment-info">
                            <span>University of Minnesota, Department of Gastroenterology, </span>
                            <span>October 2016 - September 2018</span>
                        </div>
                        <ul className="bullets">
                            <li>Managed 10 physicians academic calendars, coordinated a cross-departmental weekly liver tumor conference and attended to the overall GI Division’s administrative needs.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <h3>Editorial Staff Writer</h3>
                        <div className="employment-info">
                            <span>Tiger Oak Media, </span>
                            <span>August 2015 - October 2016</span>
                        </div>
                        <ul className="bullets">
                            <li>Authored 5-7 feature and department length stories per month for 5 local community lifestyle magazines. (<a href="https://www.kelseykuno.com/writing" target="blank">White Bear Lake Magazine, St. Louis Park Magazine, Southwest Metro Magazine, Plymouth Magazine, Maple Grove Magazine</a>).</li>
                            <li>Coordinated and conducted story interviews, adhered to company style guide, met all editorial deadlines, integrated editors’ feedback.</li>
                        </ul>
                    </div>
                </div>
                <div className="content-blocks">
                    <h2>Education</h2>
                    <div className="block">
                        <div className="">Prime Digital Academy</div>
                        <div className="">Full Stack Software Engineering Certificate </div>
                        <div className="">Graduated October 2022</div>
                        <p>Training included: Training Included: Accelerated full stack software engineering training program teaching relevant web development technologies.Training also included public speaking and presentation practice, professional skill development, solo project development, real-world client work.</p>
                    </div>
                    <div className="block">
                        <div className="">Minneapolis College of Art & Design</div>
                        <div className="">Masters of Graphic Arts and Web Design </div>
                        <div className="">Graduated December 2020</div>
                        <p>Training included: Training Included: design principles, motion design, web design, typography, user experience, graphic design and web development.</p>
                    </div>
                    <div className="block">
                        <div className="">University of Minnesota</div>
                        <div className="">Bachelor of Arts in English Literature; Studio Art </div>
                        <div className="">Graduated December 2012</div>
                    </div>





                </div>

            </div>

        </div>

    );
}

export default Resume;