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
                        <div className="role">Front End Designer</div>
                        <div>
                            <span className="company">Wand Corp, </span>
                            <span className="dates">November 2022 - December 2022</span>
                        </div>
                        <ul className="bullets">
                            <li>I built the front end of the digital menu web applications for a variety of clients.</li>
                            <li>I wrote in HTML, CSS and JavaScript.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="role">Full-Stack Software Engineering Student</div>
                        <div>
                            <span className="company">Prime Digital Academy, </span>
                            <span className="dates">June 2022 - October 2022</span>
                        </div>
                        <div>Group Project: Employee Time Tracking App</div>
                        <ul className="bullets">
                            <li>Collaborated with a local company and my team to create a full CRUD application for tracking employee shifts.</li>
                            <li>Our app included shift tracking features for the employees and the company admin; This app had an employee side and an admin side each built with custom functionality.</li>
                            <li>I built a full CRUD feature on the admin side, which allowed the admin to add, remove and update a new client to the company database.</li>
                            <li>I also built the email notification feature using Sendgrid, which triggered an email notification to both the admin and the employee upon submitting a time sheet.</li>
                        </ul>
                        <div>Solo Project:Photo Palette Generator App</div>
                        <ul className="bullets">
                            <li>Created a full-stack React application that allows artists and designers to create, customize and save image generated color palettes for later use.</li>
                            <li>I built this app using Node, Express, React, Redux, Redux-Saga, React libraries (React-color-extractor, React-colorful), SQL, Postgresql, Heroku, CSS.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="role">Creative Business Owner</div>
                        <div>
                            <span className="company">Kelsey Kuno Designs, </span>
                            <span className="dates">August 2017 - current</span>
                        </div>
                        <div>Artist</div>
                        <ul className="bullets">
                            <li>Created and sold 50+ original abstract oil paintings, many of which were commissioned paintings for clients.</li>
                            <li>Actively listened and communicated with painting commission clients to determine artwork size, materials, color palette, design elements and project timeline.</li>
                        </ul>
                        <div>Freelance Designer</div>
                        <ul className="bullets">
                            <li>Designed social media focused marketing materials for professional comedian Ali Sultan. Projects include: comedy tour posters; podcast branding; motion design graphics; 2 album covers</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="role">Gift Packer, Shift Lead</div>
                        <div>
                            <span className="company">Minny & Paul, </span>
                            <span className="dates">August 2020 - June 2022</span>
                        </div>
                        <ul className="bullets">
                            <li>Responsible for packing and shipping custom gift boxes for corporate clients, ensuring each box met company quality standards.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="role">Executive Office & Administrative Specialist</div>
                        <div>
                            <span className="company">University of Minnesota, Department of Gastroenterology, </span>
                            <span className="dates">October 2016 - September 2018</span>
                        </div>
                        <ul className="bullets">
                            <li>Managed 10 physicians academic calendars, coordinated a cross-departmental weekly liver tumor conference and attended to the overall GI Division’s administrative needs.</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="role">Editorial Staff Writer</div>
                        <div>
                            <span className="company">Tiger Oak Media, </span>
                            <span className="dates">August 2015 - October 2016</span>
                        </div>
                        <ul className="bullets">
                            <li>Authored 5-7 feature and department length stories per month for 5 local community lifestyle magazines. (White Bear Lake Magazine, St. Louis Park Magazine, Southwest Metro Magazine, Plymouth Magazine, Maple Grove Magazine).</li>
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