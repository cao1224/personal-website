import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const LivingOnEdge= () => {

    useEffect(() => {
        document.title = "Living on the Edge [2022] - Kaleo Cao";
    }, [])

    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Living on the Edge [2022]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: p5.js, Makey Makey<br />    
                    </div>

                </div>

            </main >

        </div >
    )
}

export default LivingOnEdge