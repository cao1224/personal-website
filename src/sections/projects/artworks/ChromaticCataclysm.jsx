import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const ChromaticCataclysm= () => {

    useEffect(() => {
        document.title = "ChromaticCataclysm [2022] - Kaleo Cao";
    }, [])

    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Chromatic Cataclysm [2022]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: Arudino<br /> 
                        Code: <a href="https://editor.p5js.org/Cao1224/sketches/E8UEeOs7b" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>https://editor.p5js.org/Cao1224/sketches/E8UEeOs7b</a>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '45%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1007866706?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            title="Magnetic Alchemy"
                        ></iframe>
                    </div>

                </div>

            </main >

        </div >
    )
}

export default ChromaticCataclysm