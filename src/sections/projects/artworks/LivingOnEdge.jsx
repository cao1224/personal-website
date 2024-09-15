import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const LivingOnEdge = () => {
    const appearancescrollRef = useRef(null);
    const foundationscrollRef = useRef(null);
    const finalscrollRef = useRef(null);

    const appearanceImgs = [
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img1-1.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img1-2.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img1-3.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img1-4.png",
    ]

    const foundationImgs = [
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-1.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-2.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-3.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-4.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-5.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img2-6.png",
    ]

    const [finalImages, setfinalImages] = useState([
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final1.png', caption: "Image 1: Front view of art installation" },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final2.png', caption: "Image 2: Urban landscape" },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final3.png', caption: "Image 3: Desert" },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final4.png', caption: "Image 4: A panda in grasslands" },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final5.png', caption: "Image 5: Coral and tropical fish" },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/final6.png', caption: "Image 6: Bird's-eye view of art installation" },
    ]);

    useEffect(() => {
        const scrollAppearance = setInterval(() => {
            if (appearancescrollRef.current) {
                appearancescrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        const scrollFoundation = setInterval(() => {
            if (foundationscrollRef.current) {
                foundationscrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        const scrollFinal = setInterval(() => {
            if (finalscrollRef.current) {
                finalscrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        // Cleanup intervals when component is unmounted
        return () => {
            clearInterval(scrollAppearance);
            clearInterval(scrollFoundation);
            clearInterval(scrollFinal);
        };
    }, []);



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
                        Materials: Electrically conductive tin foil tape, recyclable cardboards, plastic bottles, cans, air dry clay, pipe cleaners, wood sticks, artificial moss, paint set with brushes and colors, glue gun and sticks, shear cutter
                    </div>

                    <div className='pt-6 pb-4'>
                        <p className='pb-4'>
                            This work is inspired by the urgent issue of climate change and its impact on the world's ecosystems. The motivation to create this piece was inspired by the diversity of life on earth. By displaying the different ecosystems side by side, I hope to remind the viewer of the amazing diversity that exists in nature and why this diversity is worth protecting. At the same time, I hope to create a work that is not only visually appealing, but also conveys the important message of taking action against climate change.
                        </p>

                        <h4>Progress: Appearance</h4>
                        <div
                            ref={appearancescrollRef}
                            className="d-flex overflow-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            <div className="row flex-nowrap">
                                {appearanceImgs.map((image, index) => (
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
                        <p className='pt-3'>
                            To give the cardboard an aged and textured look, I burned its edges carefully with fire. After that, I cut out a circle from the cardboard. On this circle, I attached the mouth of a plastic bottle.
                        </p>
                    </div>

                    <div className='pb-6'>
                        <h4>Progress: Foundation</h4>
                        <div
                            ref={foundationscrollRef}
                            className="d-flex overflow-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            <div className="row flex-nowrap">
                                {foundationImgs.map((image, index) => (
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
                        <p className='pt-3'>
                            I made the base waterproof by covering it with plastic and tin foil. Then, I painted cardboard with red, black, and dark green colors to create a feeling of ecological destruction. I used pieces of wood to raise the foundation, giving it some height and dimension. I also split the base into three areas: two for the lawn and one for the ocean.
                        </p>
                    </div>



                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img3.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <h4>Progress: Tree</h4>

                            <p>
                                I crafted an abstract, brightly colored tree using air-dry clay. To support the trunk, I used tin cans, which made it easy to add leaves and rounded branches. I covered the cans with air-dry clay so they blended in with the rest of the tree. I also placed tin foil in the leaves to make it easy to connect them to the Makey Makey device.
                            </p>
                        </div>
                    </div>



                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img4.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <h4>Progress: Animals</h4>
                            <p>
                                I made a panda and a whale out of air-dry clay. For the tropical fish and corals, I used pipe cleaners to shape them. These additions brought more life and detail to the project, making it more engaging and colorful.
                            </p>
                        </div>
                    </div>

                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img5.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <h4>Progress: <a href="https://makeymakey.com/blogs/how-to-instructions/remap" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>Remap Keys in Makey Makey </a></h4>
                            <p>
                            Originally, the Makey Makey did not have options for keys like 1, 2, or N. To solve this, I customized the input controls by remapping them.
                            </p>
                        </div>
                    </div>

                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/img6.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <h4>Future Shock: The Touch Blood Wall Experience</h4>
                            <p>
                            When the user touches the physical item—a blood wall made using painting and cardboard—it is equivalent to pressing `A` on the keyboard. This triggers the code to display floating blood on the screen and play sounds of war, a baby crying, and a call for help. These sound effects suggest a sense of urgency and despair, while the help sound implies that there is still hope for a better future.
                            </p>
                        </div>
                    </div>

                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/living_on_edge/code.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <h4>Interactive Game: Would You Rather Than</h4>
                            <p>
                                The interactive "Would You Rather" game is designed to engage and educate users about the impact of their daily choices on the environment, focusing on ecosystems and climate change. It presents users with choices that highlight the importance of conservation, sustainable living, and reducing our carbon footprint. Seventeen questions are randomly displayed each time, but the user can only answer five questions in one round. To start the game, the user needs to press 'S' (ASCII code 83) by touching tin foil near a plastic bottle and leaf in the art installation. To choose the first option, the user presses '1' (ASCII code 49) by touching the mushroom near the panda; to select the second option, the user presses '2' (ASCII code 50) by touching the caterpillar. To proceed to the next question, the user presses 'N' (ASCII code 78) by touching the mushroom near the big tree.
                            </p>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div
                            ref={finalscrollRef}
                            className="d-flex overflow-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {finalImages.map((image, index) => (
                                <div key={index} className="col-6 col-md-4 col-lg-4" style={{ flex: "0 0 auto", padding: "0 15px" }}>
                                    <figure>
                                        <img
                                            src={image.url}
                                            className="img-fluid"
                                            alt={`Slide ${index}`}
                                            style={{ width: "100%"}}

                                        />
                                        <figcaption className="text-center text-muted fst-italic" style={{ fontSize: '0.875rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                            {image.caption}
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>

                        <p>
                        The significance of this artwork is multifaceted. On the one hand, it celebrates the natural beauty and complexity of the earth. On the other hand, it warns us of the dangers we face if we do not address climate change. Audiences can interpret this work in a variety of ways. The contrast between different ecosystems may make them think about the delicate balance of nature. The use of various materials may represent how human activities affect the environment in different ways. The wall, made of burnt cardboard and painted blood red, is a powerful symbol. It can be seen as a sign of the damage humans have done to the earth. Artificial mosses and animals add life to the scene, perhaps suggesting that the future can be hopeful if we take action.
                        </p>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '45%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1009397634?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Living on the Edge"
                        ></iframe>
                    </div>

                    <p className='pt-3 pb-6'>
                        Overall, the work invites the audience to reflect on their relationship with nature and to consider what role they can play in protecting the environment. By presenting urban, desert, grasslands, and marine environments simultaneously, the art installation aims to demonstrate how these ecosystems are interconnected and how changes in one area can affect others. By combining familiar elements in unexpected ways, the art installation encourages us to look at the world around us with fresh eyes and a new sense of responsibility.
                    </p>

                </div>

            </main >

        </div >
    )
}

export default LivingOnEdge