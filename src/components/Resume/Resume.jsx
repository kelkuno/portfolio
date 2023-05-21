import React from 'react';

function Resume() {

    return (
        <div className="resume-container">
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
                    <h3>Prime Digital Academy</h3>
                    <div className="">Full Stack Software Engineering Certificate </div>
                    <div className="">Graduated October 2022</div>
                    <ul className="bullets">
                        <li><span className="underline">Training included: </span> Accelerated full stack software engineering training program teaching relevant web development technologies.Training also included public speaking and presentation practice, professional skill development, solo project development, real-world client work.</li>
                    </ul>
                </div>
                <div className="block">
                    <h3>Minneapolis College of Art & Design</h3>
                    <div className="">Masters of Graphic Arts and Web Design </div>
                    <div className="">Graduated December 2020</div>
                    <ul className="bullets">
                        <li><span className="underline">Training included: </span> Design principles, motion design, web design, typography, user experience, graphic design and web development.</li>
                    </ul>
                </div>
                <div className="block">
                    <h3>University of Minnesota</h3>
                    <div className="">Bachelor of Arts in English Literature; Studio Art </div>
                    <div className="">Graduated December 2012</div>
                </div>
            </div>
            <div className="content-blocks skills">
                <h2>Skills</h2>
                <div className="block">
                    <h4>Development</h4>
                    <ul >
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Redux</li>
                        <li>SQL</li>
                        <li>Express</li>
                        <li>NodeJS</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className="block">
                    <h4>Graphic Design</h4>
                    <ul>
                        <li>Adobe After Effects</li>
                        <li>Adobe Premiere</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe XD</li>
                        <li>Typography</li>
                        <li>Design Layout</li>
                        <li>Motion Design</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Resume;