import React from 'react';
// import {useHistory} from 'react-router-dom';

// const history = useHistory();

// const routeHome = () => {
//     alert("You are headed to animals");
//     ///CHANGE LOCATION???
//     history.push('/resume');
//   }; 


function Nav() {
    return(
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
              <div className="contact"><span className="number">01</span>LinkedIn</div>
              <div className="contact"><span className="number">02</span>GitHub</div>
              <div className="contact"><span className="number">03</span>Creative Portfolio</div>
            </div>
          </div>
        </div>

    );
}

export default Nav;