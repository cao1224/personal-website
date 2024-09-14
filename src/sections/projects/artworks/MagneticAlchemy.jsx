import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const MagneticAlchemy= () => {

    const scrollRef = useRef(null);

    useEffect(() => {
        document.title = "Magnetic Alchemy [2024] - Kaleo Cao";
    }, [])

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);


    const images = [
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img1.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img2.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img3.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img4.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img5.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img6.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/magnetic_alchemy/img7.png",
    ];


    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Magnetic Alchemy [2023]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Techniques: Arudino, Soldering<br />
                        Materials: Sealed container, Green sand, Iron powder, Magnets, Programmable LED strips, PIR sensor, Micro servo motors, Wires, Cars, Stones, Fairy world characters, Humidifier modules, and Bottle.
                    </div>

                    <div
                        ref={scrollRef}
                        className="pt-6 d-flex overflow-auto"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <div className="row flex-nowrap">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="col-6 col-md-4 col-lg-4"
                                    style={{ flex: "0 0 auto", padding: "0 15px" }}
                                >
                                    <img
                                        src={image}
                                        className="img-fluid"
                                        alt={`Slide ${index}`}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className='pt-6 pb-4'>
                        As the creator of Magnetic Alchemy, I find inspiration in the hidden forces that shape our world. I am fascinated by the invisible forces of magnetism and have always wondered how to make these visible energies visible and beautiful. The idea of combining technology with natural elements inspired my imagination. I wanted to create something ever-changing that could keep the viewer interested and curious. I was inspired by childhood memories of playing with magnets and iron filings, when I marveled at the patterns they created. I also think about how technology often gives a sense of separation from nature. These thoughts led me to the idea of fusing electronic components with raw materials such as iron powder and stones. 
                    </p>

                    <p className='pb-4'>
                        During the creative process, I carefully planned and conducted several experiments. First, I used a transparent box as the body of the installation. I cleverly placed three micro servo motors - one on the back and two on the bottom. These motors have magnetic arms that move the iron powder. Next, I was faced with the challenge of how to illuminate it. I installed LED lights around the container to illuminate the moving iron powder. I also added a humidifier module to create a dreamy atmosphere. To add depth and interest to the piece, I placed a small model SUV and some stones in the box. I gave these items magnetic properties as well so that they could interact with the iron powder to create more complex shapes and dynamics. During the experiment, I tried different materials, including ferromagnetic fluid. However, I found that it didn't work well in a large box because it would cover the other elements. This encouraged me to adjust the design and focus more on the use of iron powder. Finally, I added a PIR sensor to detect motion. When someone approaches the piece, it triggers the LEDs to flash and change color. This interactive element breathes life into the work when the viewer is present.
                    </p>

                


                    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '45%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1009329350?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            title="Magnetic Alchemy"
                        ></iframe>
                    </div>

                    <p className='pt-4 pb-6'>
                    “Magnetic Alchemy” represents the fusion of different worlds. The iron powder symbolizes the raw materials of the earth, while the electronic components represent human innovation. As these elements interact, they create an ever-changing landscape - just like our world. The purpose of this art installation was to show how electronics can work with natural materials to create beautiful and ever-changing works of art. The interactive nature of the piece and its motion-activated lights remind us that we all play a role in shaping our environment. The work also invites the audience to pause and observe the hidden forces in our world and how they shape everything we see.
                    </p>

                </div>

            </main >

        </div >
    )
}

export default MagneticAlchemy