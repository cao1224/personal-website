import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';
import Footer from '../../footer/Footer';



const BionicBalance= () => {

    useEffect(() => {
        document.title = "Bionic Balance [2024] - Kaleo Cao";
    }, [])

    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Bionic Balance [2024]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: Rhinoceros 3D, Grasshopper<br />    
                    </div>

                </div>

      



                {/* <section>
                    <div className="container py-4">
                        <h5 className="text-capitalize">Random Recommended works</h5>
                    </div>
                </section> */}

            </main >
            <Footer />
        </div >
    )
}

export default BionicBalance