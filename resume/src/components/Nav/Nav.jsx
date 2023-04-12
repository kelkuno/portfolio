import React from 'react';


function Nav() {
    return (
        <div className="footer">
            <div
                onClick={() => console.log('hi')}
                className="logo"
            >
                Kelsey <br /> Kuno
            </div>
            <div className="title-contact-container">
                <div className="title">software engineer & designer</div>
                <div className="contact-container">
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
        </div>

    );
}

export default Nav;