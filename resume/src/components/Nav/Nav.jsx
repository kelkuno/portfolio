import React from 'react';


function Nav() {
    return(
        <div className="footer">
          <div className="logo">
            Kelsey <br /> Kuno
          </div>
          <div className="title-contact-container">
            <div className="title">software engineer & designer</div>
            <div className="contact-container">
              <div className="contact"><span className="number">01</span>LinkedIn</div>
              <div className="contact"><span className="number">02</span>GitHub</div>
              <div className="contact"><span className="number">03</span>Creative Portfolio</div>
            </div>
          </div>
        </div>

    );
}

export default Nav;