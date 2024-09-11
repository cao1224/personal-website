import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const BionicBalance= () => {

    useEffect(() => {
        document.title = "Bionic Balance [2024] - Kaleo Cao";
    }, [])

    const images = [
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img1.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img2.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img3.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img4.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img5.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img6.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img7.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img8.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img9.JPG"
    ];

    const scrollRef = useRef(null);


    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

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

                    <div
                        ref={scrollRef}
                        className="d-flex overflow-auto"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {images.map((image, index) => (
                            <div key={index} style={{ flex: "0 0 33.33%", padding: "0 15px" }}>
                                <img
                                    src={image}
                                    className="img-fluid"
                                    alt={`Slide ${index}`}
                                    style={{ 
                                        width: "auto",
                                        height: "300px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>


      



                {/* <section>
                    <div className="container py-4">
                        <h5 className="text-capitalize">Random Recommended works</h5>
                    </div>
                </section> */}

            </main >

        </div >
    )
}

export default BionicBalance