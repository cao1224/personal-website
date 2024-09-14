import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const BionicBalance = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const finalscrollRef = useRef(null);
    const processscrollRef = useRef(null);

    useEffect(() => {
        document.title = "Bionic Balance [2024] - Kaleo Cao";
    }, [])

    const images = [
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img1.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img2.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img3.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img4.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img5.JPG",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img6.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img7.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img8.png",
        "https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/img9.png"
    ];

    const [WIPimages, setWIPimages] = useState([
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/WIP-1.png', caption: "'Used the Panel component to verify the output", detailed_caption: 'Used the Panel component to verify the output of the Series component and the data structure of the Move component.' },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/WIP-2.png', caption: "Used Simplify for the output", detailed_caption: "Before using Simplify, the Line component outputs data with 20 branches, a simple structure. After connecting to the Offset Curve, the data complexity increases to 1000 branches due to the operation's parameters. Applying Simplify reduces the data back to 20 branches by removing unnecessary nesting, making it easier to manage and allowing further operations, like Shift Paths, to proceed smoothly." },
        { url: 'https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/WIP-3.png', caption: 'Render of the second structure, featuring rotated floors with a rectangular shape.', detailed_caption: "Render of the second structure, featuring rotated floors with a rectangular shape." },
    ]);

    // Scrolling effect
    // Use useEffect to scroll both containers at different intervals or the same
    useEffect(() => {
        const scrollFinal = setInterval(() => {
            if (finalscrollRef.current) {
                finalscrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        const scrollImages = setInterval(() => {
            if (processscrollRef.current) {
                processscrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        // Cleanup intervals when component is unmounted
        return () => {
            clearInterval(scrollFinal);
            clearInterval(scrollImages);
        };
    }, []);



    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Bionic Balance [2024]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: Rhinoceros 3D, Grasshopper, Arduino
                    </div>

                    <div
                        ref={finalscrollRef}
                        className="d-flex overflow-auto"
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



                    <p className="pt-6 pb-4">
                        Inspiration for this art instllation comes from the ever-changing Earth. Over millions of
                        years, plate tectonics reshape our planet. Ocean can become deserts, and new land forms.
                        As the world shifts, lving things change too. They find new ways to work together and survive.
                        We humans are part of nature, relying on the Earth's air, water, and food to survive. However,
                        our actions can harm the environment, often in ways we don't immediately notice. For example,
                        in cities like Las Vegas, excessive water and energy use can cause hidden damage to the ecosystem.
                        The desert, where such cities are built, presents unique challenges for survival. Plants like cacti
                        have developed special adaptations to thrive in these harsh conditions, such as storing water in their
                        stems. These natural solutions inspire new approaches to designing buildings in desert. Learning from
                        cacti and other desert plants can lead to living spaces that work in harmony with the dry landscape,
                        using resources more efficiently and reducing environmental impact.
                    </p>

                    <p className="pb-4">
                        The main idea behind this work are bionics and architecture. Bionics means using nature's designs to solve
                        human problems. Many builders don't think enough about the environment. This leads to buildings that harm nature.
                        But we can look at how plants and animals live to make better buildings. For example, trees use energy efficiently,
                        a principle we can apply to our designs. Trees maximize sunlight capture through their leaf arrangement and convert
                        it into energy through photosynthesis. They also regulate water use and temperature through their shape and bark structre.
                        The installation explores how buildings could work like living things, adapting to their environment and using resources efficiently.
                        It questions traditional building practices that often ignore the need for ecological balance.
                    </p>

                    <p className="pb-4">
                        The art installation allows people to touch sensors and hear stories from both humans and animals in the year 2100, blending
                        these narratives to encourage viewers to reflect on the long-term effects of our choices. By learning about how animals live
                        and what they do for the environment, we can understand why it's important to protect them. The installation also acts as a
                        mirror of our impact on the environment. By making this relationship visible and interactive, it aims to inspire thinking about
                        how to live in greater harmony with nature.  Additionally, it uses 3D printing to showcase new ways of creating sustainable living spaces,
                        inspired by the shapes and functions of desert animals and plants.
                    </p>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 pb-6">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/layer1-2.png"
                                alt="First Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-lg-6 col-md-12 pb-6">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/layer3-4.png"
                                alt="Second Image"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <p className="pb-4">
                        The four pictures above show the following layers: the ocean layer (1), the dinosaur layer (2),
                        the grassland layer (3), and the desert layer (4). The main material used to create these shapes is resin.
                        In the ocean layer, the color is blue, and some shells and fish bones have been added. The second layer,
                        the dinosaur layer, is dark green, featuring dinosaur bones and grass branches. The third layer represents
                        the grassland, which is transitioning into a desert, and includes various dried flowers. The top layer is
                        the desert, which is uneven with 0.5 inches of sand, and contains cacti and succulents. The layered design of
                        this installation serves as a visual representation of Earth's geological and ecological history, showcasing
                        how environments transform over time. By using resin to create distinct layers with embedded artifacts, the
                        artwork provides a tangible experience that allows viewers to witness the progression from ancient oceans
                        to modern deserts, emphasizing the continuous cycle of change in our planet's ecosystems. This approach
                        not only educates viewers about Earth's history but also encourages reflection on the current state of
                        our environment and the potential future changes we may face, making the artwork both informative and
                        thought-provoking.
                    </p>

                    <p className="pb-4">
                        The creation of this art installation involved a mix of digital design and physical construction. The use of Parakeet and Kangaroo libraries played a key role in the design process. These libraries likely aided in creating complex geometries. To overcome some challenges, I watched tutorials and used tools like Param Viewer and Panel components to ensure data consistency throughout the design process.

                    </p>

                    <div>
                        <div
                            ref={processscrollRef}
                            className="d-flex overflow-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {WIPimages.map((image, index) => (
                                <div key={index} className="col-6 col-md-4 col-lg-4" style={{ flex: "0 0 auto", padding: "0 15px" }}>
                                    <figure>
                                        <img
                                            src={image.url}
                                            className="img-fluid"
                                            alt={`Slide ${index}`}
                                            style={{ width: "100%", cursor: "pointer" }}
                                            onClick={() => openModal(image)}
                                        />
                                        <figcaption className="text-center text-muted fst-italic" style={{ fontSize: '0.875rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                            {image.caption}
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}

                            {selectedImage && (
                                <div
                                    className={`modal fade ${showModal ? 'show d-block' : ''}`}
                                    tabIndex="-1"
                                    style={{ display: showModal ? 'block' : 'none' }}
                                    onClick={closeModal}
                                >
                                    <div className="modal-dialog modal-dialog-centered modal-lg">
                                        <div className="modal-content">

                                            <figure>
                                                <img
                                                    src={selectedImage.url}
                                                    className="img-fluid"
                                                    alt={selectedImage.caption}
                                                />
                                                <figcaption className="text-center text-muted fst-italic" style={{ fontSize: '0.875rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                                    {selectedImage.detailed_caption}
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {showModal && (
                                <div
                                    className="modal-backdrop fade show"
                                    onClick={closeModal}
                                ></div>
                            )}
                        </div>

                        <p className="pb-4">
                            The design began with two main structures. For the first, a circle was drawn and then extruded using Series and Unit Z components to set floor heights and numbers. A Dispatch component was used to create a weave-style decoration, spreading data into two directions using a True/False pattern. The second structure started as a rectangle, again using Series and Unit Z for floor creation. Rotate and Random components were applied to give each floor a unique orientation. List, Sequence, and Tree components helped form supporting walls and connections between floors. Throughout the design process, managing data structure was a key focus. In Grasshopper software, data often flows between different components or nodes. Each component may have inputs and outputs, which can thought of as branches in a tree-like structure. When working with complex designs, these data structures can become intricate. Sometimes, the output from one component doesn't match the required input format of the next component. This mismatch can cause errors or unexpected results in the design. To resolve this, three key operations were used: simplifying to remove unnecessary data hierarchy, grafting to add levels when needed, and flattening to turn complex data into a single list. These adjustments ensured the integrity of the design, prevented errors, and allowed for smoother creation of complex designs by matching data points between components.
                        </p>
                    </div>

                    <div className="row pb-6">
                        <div className="col-12 col-md-4">
                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/3d-printing.gif"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '400px', maxWidth: '100%' }}

                            />
                        </div>
                        <div className="col-12 col-md-8">
                            <p>
                                Before the model was 3D printed, the model was inspected for exposed edges and fixed if there were any, and the pillars were thickened to ensure structural stability. To increase the realistic quality of the installation, small 3D printed animals and characters were added to create a more immersive experience. The art installation’s tech stack also utilized Arduino, LED strips, and touch sensors. Two touch sensors were set up, each controlling a set of LED lights. This allows participants to interact with the installation, change the color of the lights and turn them on or off. The other three touch sensors were added for storytelling purposes. When activated, it triggers audio playback, adding another layer of engagement to the piece. This audio element may share stories or information related to the theme of environmental change and adaptation of the installation.
                            </p>

                            <img
                                src="https://personal-website-data.s3.us-east-2.amazonaws.com/bionic_balance/models.png"
                                alt="Descriptive text"
                                className="img-fluid"
                                style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '300px', display: 'block', margin: '0 auto'  }}
                            />
                        </div>
                    </div>


                    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '45%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/953263117?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Bionic Balance – Part 1"
                        ></iframe>
                    </div>

                    <p className="pt-4 pb-6">
                        The video above demonstrates three stories. In the year 2100, Mary and Sarah think about how humans have adapted to desert life, with
                        bionic buildings that mimic cacti to store water and solar panels that move like sunflower heads to capture the sunlight.
                        Meanwhile, an eagle rests on the roof, observing the collaboration between man and nature. The buildings are designed to fit seamlessly
                        into the harsh landscape, and humans draw inspiration from the hardy desert flora and fauna. Both stories emphasize the power and beauty
                        of living in harmony with the environment. The third story is about two friends who discover a mysterious cave in the desert, triggering
                        conversations about the future, imagining either a high-tech world with sustainable innovations or a barren wasteland where civilization
                        is in ruins. They reflect on the potential changes the world could face by 2100 while appreciating the cave's strange appearance.
                    </p>



                </div>
            </main >

        </div >
    )
}

export default BionicBalance