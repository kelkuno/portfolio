import React from 'react';

import {useHistory} from 'react-router-dom';




function Resume() {

    const history = useHistory();

const routeHome = () => {
    alert("You are headed to animals");
    ///CHANGE LOCATION???
    history.push('/about');
  }; 
    return(
        <h1
        onClick={routeHome}>resume!!</h1>

    );
}

export default Resume;