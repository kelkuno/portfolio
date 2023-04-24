import React from 'react';


function PhotoPalette() {
    return (
        <>
            <h2>Photo Palette</h2>
            <div className="three-img">
                <iframe src="https://giphy.com/embed/wvER9hFlm3jZrePE0r" width="480" height="404" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/pLUVhxbX9LZsYZ9pZv" width="480" height="404" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <iframe src="https://giphy.com/embed/4kRHo2lJoBJVnacGFT" width="480" height="404" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            <h3>Full CRUD Application Overview:</h3>
            <p><b>Project Duration:</b> 2 weeks!</p>
            <p>Color is a critical tool for artists and designers. We are surrounded by interesting color combinations all of the time. I might notice a cool color combination in a pattern on someone's shirt or displayed on a package logo or in a piece of artwork. I might go for a walk and see a striking scene in nature with a great color palette. Color inspirations are everywhere but if we don’t have a way to record and save them, then we won't remember them. </p>
            <p>My app will generate color palettes from photos that users upload. The idea is a user will upload a photo and the app will generate colors in the photo so that the user can store, edit and access the palette later on. </p>
            <p>Being that I am an artist myself, I spent a lot of time thinking about the application flow. Here's a rough wireframe of how I imagined the flow:</p>
            <div className="single-img">
                <img src='./photo-app-flow.png' alt="photo-app-flow-chart" />
            </div>
            <div className="single-img">
                <img src='./photo-app-db.png' alt="photo-app-database-design" />
            </div>
            <h3>Built with:</h3>
            <div className="technologies">
                <p>Node</p>
                <p>Express</p>
                <p>React</p>
                <p>Redux</p>
                <p>Redux-Saga</p>
                <p>React Libraries: React-color-extractor && React-colorful</p>
                <p>SQL</p>
                <p>Postgresql</p>
                <p>Heroku</p>
                <p>CSS</p>
            </div>
            <div className="button-grouping">
                <button>
                    <a href="https://github.com/kelkuno/photo-palette" target="blank">github repo</a>
                </button>
                <button>
                    <a href="https://peaceful-meadow-98495.herokuapp.com/#/user" target="blank">deployed app</a>
                </button>
                <button>
                    <a href="https://docs.google.com/document/d/137iK_bsOJbLLuM_st7pHMUAebAm-2pgH2rqp3srLdJ0/edit?usp=sharing" target="blank">project scope</a>
                </button>
            </div>

        </>


    );

}


export default PhotoPalette; 