import React from 'react';


function Nav() {
    return (
        <>
            <div className="footer">
                <div className="logo">
                    <h1
                        onClick={() => console.log('hi')}
                    >
                        Kelsey <br /> Kuno
                    </h1>
                    <div className="nav-text">software engineer & designer</div>
                </div>

                <div className="contact-container">
                    <div className="contact">
                        <span className="number">01</span>
                        <a href="https://kelkuno.github.io/portfolio/#/"
                        >
                            Home
                        </a>
                    </div>
                    <div className="contact">
                        <span className="number">01</span>
                        <a href="https://www.linkedin.com/in/kelsey-kuno/"
                            target="blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className="contact">
                        <span className="number">02</span>
                        <a href="https://github.com/kelkuno"
                            target="blank">
                            GitHub
                        </a>
                    </div>
                    <div className="contact">
                        <span className="number">03</span>
                        <a href="https://www.kelseykuno.com/"
                            target="blank">
                            Creative Portfolio
                        </a>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Nav;