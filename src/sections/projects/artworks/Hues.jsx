import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const Hues = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const wordcloudRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        document.title = "HUES [2024] - Kaleo Cao";
    }, [])

    const [images, setimages] = useState([
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/anger-drawing.png", caption: "Emotion: anger; Style: drawing", detailed_caption: "Emotion: anger; Style: low poly, i would teach patience and compassioni feel like so much of our world has become more violent and agressive and less understanding of the differences that we have, i was feeling wronged by my master and i put my foot down, i feel like in order for me to say that about someone it means more because im obnoxious and awkward, i feel so stressed out in the office that i was thinking is the salary i am getting really worth it, i feel pissed off but maybe that is because i had some chocolate bars today which are not good for mood" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/anger-poly.png", caption: "Emotion: anger; Style: low poly", detailed_caption: "Emotion: anger; Style: low poly, i would teach patience and compassioni feel like so much of our world has become more violent and agressive and less understanding of the differences that we have, i was feeling wronged by my master and i put my foot down, i feel like in order for me to say that about someone it means more because im obnoxious and awkward, i feel so stressed out in the office that i was thinking is the salary i am getting really worth it, i feel pissed off but maybe that is because i had some chocolate bars today which are not good for mood" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/happy-halftone.png", caption: "Emotion: happiness; Style: halftone", detailed_caption: "Emotion: happiness; Style: halftone, i can make feel gorgeous and tell her everyday how beautiful she is because ill know she is from when she wakes up in the morning with no makeup to when shes asleep at night dreaming while im awake watching her, i feel that such a beloved story and character deserves far more mainstream recognition than has been given over the years" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/happy-sureliasm.png", caption: "Emotion: happiness; Style: sureliasm", detailed_caption: "Emotion: happiness; Style: sureliasm, i packed for the hospital and brett and i just talked about the next day the feelings we were feeling and how excited we were getting, i thought it might and it makes my hair feel lovely and silky, im feeling much more graceful lately, i don t feel that my tax dollars are being respected" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/happy-watercolor.png", caption: "Emotion: happiness; Style: watercolor", detailed_caption: "Emotion: happiness; Style: watercolor, i can make feel gorgeous and tell her everyday how beautiful she is because ill know she is from when she wakes up in the morning with no makeup to when shes asleep at night dreaming while im awake watching her, i have a knight in goofy armor that makes me feel absolutely giggly, i feel that such a beloved story and character deserves far more mainstream recognition than has been given over the years, i feel calm a href http perpetualized" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/sad-drawing-1.png", caption: "Emotion: sadness; Style: drawing", detailed_caption: "Emotion: sadness; Style: drawing, i feel like i broke ground, im feeling so needy that i even became desperate to join a church on the sole basis of whether it had a meals ministry because for the first time in my three pregnancies i dont know who in my zip code will give a damn about my babys birth or whether weve got a stocked kitchen, i hear stories of women just putting up with their mens crap i feel quite disturbed" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/sad-drawing-2.png", caption: "Emotion: sadness; Style: drawing", detailed_caption: "Emotion: sadness; Style: drawing, im feeling a little bit sad about all this infertility crap and im feeling a li, i feel like i broke the rules there, im feeling a bit discontent with my spring break thus far, im feeling so needy that i even became desperate to join a church on the sole basis of whether it had a meals ministry because for the first time in my three pregnancies i dont know who in my zip code will give a damn about my babys birth or whether weve got a stocked kitchen, i hear stories of women just putting up with their mens crap i feel quite disturbed" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/sad-poly.png", caption: "Emotion: sadness; Style: low poly", detailed_caption: "Emotion: sadness; Style: low poly, i feel so hopeless and helpless and scared now cause nothings been finalised yet, ive had experiences before where id try to express how im feeling to others and they take it as chloes just in a weird mood, i feeling inadequate target blank dayblog, i feel so insecure especially for silent and retningsforandrende stones, i still feel woefully inadequate to the task with the basement and the laundry and the looming trip and a hard group to take to mass" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/surprise-halftone.png", caption: "Emotion: surprise; Style: halftone", detailed_caption: "Emotion: surprise; Style: halftone, i feel ashamed when i earn a big monthly salary without sweat or hard work but others wake up early to make a little money working until sunset, i am currently married so having these thoughts and feelings make me feel guilty and like i am doing something wrong because i would be very upset if my husband had the same thoughts and feelings towards another person besides me, i wrote this morning about waking up and feeling quite low then hoe the feeling passes after a while, i am feeling much less anxious and much more energetic with each day just taking the nitro fx drops" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/surprise-sureliasm.png", caption: "Emotion: surprise; Style: sureliasm", detailed_caption: "Emotion: surprise; Style: sureliasm, i feel ashamed when i earn a big monthly salary without sweat or hard work but others wake up early to make a little money working until sunset, i am currently married so having these thoughts and feelings make me feel guilty and like i am doing something wrong because i would be very upset if my husband had the same thoughts and feelings towards another person besides me, i wrote this morning about waking up and feeling quite low then hoe the feeling passes after a while, i am feeling much less anxious and much more energetic with each day just taking the nitro fx drops" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/surprise-watercolor.png", caption: "Emotion: surprise; Style: watercolor", detailed_caption: "Emotion: surprise; Style: watercolor, i feel ashamed when i earn a big monthly salary without sweat or hard work but others wake up early to make a little money working until sunset, i am currently married so having these thoughts and feelings make me feel guilty and like i am doing something wrong because i would be very upset if my husband had the same thoughts and feelings towards another person besides me, i wrote this morning about waking up and feeling quite low then hoe the feeling passes after a while, i remember waking up feeling very emotional, i am feeling much less anxious and much more energetic with each day just taking the nitro fx drops" }
    ]);

    const [wordclouds, setwordclouds] = useState([
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/anger_wordcloud.png", caption: "Word cloud visualization with the anger messages" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/joy_love_surprise_wordcloud.png", caption: "Word cloud visualization related to happiness and surprise messages" },
        { url: "https://personal-website-data.s3.us-east-2.amazonaws.com/hues/sadness_wordcloud.png", caption: "Sadness-related word cloud visualization" }
    ])

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Use useEffect to scroll both containers at different intervals or the same
    useEffect(() => {
        const scrollWordclouds = setInterval(() => {
            if (wordcloudRef.current) {
                wordcloudRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        const scrollImages = setInterval(() => {
            if (imageRef.current) {
                imageRef.current.scrollBy({ left: 150, behavior: 'smooth' });
            }
        }, 3000);

        // Cleanup intervals when component is unmounted
        return () => {
            clearInterval(scrollWordclouds);
            clearInterval(scrollImages);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <main className='container'>

                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">Heartfelt Utterances Emotive Strokes [2024]</h2>
                    </div>

                    <div className="bordered-div py-2 my-4 fs-6 fw-light">
                        Technique: Python, Message Passing Interface (MPI), OpenCV<br />
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '45%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1007863999?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="HUES: Partial Works Demo"
                        ></iframe>
                    </div>

                    <p className="pt-6 pb-4">
                        The HUES (Heartfelt Utterances Emotive Strokes) project came from a simple
                        question: Can art help us understand our feelings better? We all know that art
                        can inspire many emotions in us. But what if we could use art to explore and
                        express our emotions in the digital world? Social media has become a significant way
                        for people to share their lives and emotions. Users post their joys, sadness, and everything
                        in between. The project also draws inspiration from how people use digital tools like Photoshop to edit
                        and create images. While these tools are based on complex code, HUES takes a different approach.
                        Instead of users manually editing images, HUES automatically applies artistic effects to social
                        media content. This offers a new way to view and understand emotional expression in digital spaces.
                        To do this, the project utilized two datasets from Kaggle: the <a href="https://www.kaggle.com/datasets/sujaykapadnis/emotion-recognition-dataset" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>Emotion Recognition Data</a> and
                        the <a href="https://www.kaggle.com/datasets/adhamelkomy/twitter-emotion-dataset" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>Twitter Emotion Dataset</a>.
                        These datasets provide a good mix of images and text.
                    </p>

                    <p className="pb-4">
                        The process began with data cleaning and file renaming to improve usability. During data preprocessing, I went through all the sentiment texts and created word cloud visualizations to see which words appeared most frequently in each sentiment.
                        In the word cloud visualization with the <span className="badge-red-soft font-weight-bold">anger</span> messages, the most common words include "feeling," "people," "time," "know," and "want." These words appear frequently because they reflect common themes of frustration with others, feelings of being wronged, and desire for change in emotional charged situations. In the word cloud visualization related to <span className="badge-red-soft font-weight-bold">happiness</span> and <span className="badge-red-soft font-weight-bold">surprise</span> messages, the most common words include "feel," "people," "life," "love," and "time.”  These words are commonly used to express joy, appreciation, and positive emotions, often reflecting their relationships, experiences, and moments of fulfillment or surprise in their lives. Common words in the <span className="badge-red-soft font-weight-bold">sadness</span>-related word cloud visualization include "feeling," "people," "time," "know," and "life." These words often appear when people express their emotional state, often reflecting relationships, personal struggles, and moments of isolation or regret. The emphasis on “feeling” and “living” suggests introspection about one's emotional well-being and life circumstances in moments of grief.
                    </p>

                    <div
                        ref={wordcloudRef}
                        className="d-flex overflow-auto"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {wordclouds.map((image, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-4" style={{ flex: "0 0 auto", padding: "0 15px" }}>
                                <figure>
                                    <img
                                        src={image.url}
                                        className="img-fluid"
                                        alt={`Slide ${index}`}
                                        style={{ width: "100%", cursor: "pointer" }}

                                    />
                                    <figcaption className="text-center text-muted fst-italic" style={{ fontSize: '0.875rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        {image.caption}
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>

                    <p className="pb-4">
                        The final dataset includes 10 images and about 20 messages for each emotion. <a href="https://opencv.org/" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>OpenCV</a>,
                        a computer vision library, was used to edit each image. Five different artistic styles were developed: drawing,
                        surrealism, watercolor, poly, and halftone. Each time the program runs, it selects a random style to apply to
                        each image. This approach keeps the output fresh and interesting. The images don't appear all at once. Each one
                        displays for about 10 seconds, with potential delays based on the complexity of creating the new style. While the
                        images change, related messages float across the screen. This creates a digital art show that combines visuals and
                        words to express different emotionsThe images don't appear all at once. Each one displays for about 10 seconds, with
                        potential delays based on the complexity of creating the new style. While the images change, related messages
                        float across the screen. This creates a digital art show that combines visuals and words to express different emotions.
                    </p>

                    <div>
                        <p>
                            Below are 11 images representing four emotions (anger, happiness, sadness, and surprise), each with an applied style. You can click on any image to view the full sentence of each floating message.
                        </p>
                        <div
                            ref={imageRef}
                            className="d-flex overflow-auto"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {images.map((image, index) => (
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
                                                <figcaption className="text-start text-muted" style={{ fontSize: '0.875rem', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                                    {(() => {
                                                        // Split the detailed caption at the first comma
                                                        const [firstContent, remainingContent] = selectedImage.detailed_caption.split(/,(.+)/);

                                                        // Extract bullet points from remaining content
                                                        const bulletPoints = remainingContent
                                                            ? remainingContent.split(',').map((point, index) => (
                                                                <li key={index} style={{ marginBottom: '0.5rem', listStyleType: 'decimal' }}>{point.trim()}</li>
                                                            ))
                                                            : [];

                                                        return (
                                                            <div>
                                                                <p className='pl-4'>{firstContent}</p>
                                                                <ol>{bulletPoints}</ol>
                                                            </div>
                                                        );
                                                    })()}
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


                    </div>

                    <p className="pb-4">
                        HUES invites people to consider how feelings are shared in the digital age. When an image is transformed into a different style of art, it can change people’s emotional response to it. A photo that initially evokes a sense of happiness may suddenly seem mysterious when given a surreal effect. A sad post may feel more hopeful when turned into a watercolor. Floating messages add another layer of interpretation. They remind people that words and images can work together to express emotion. Sometimes they match perfectly, while other times they seem to contradict each other, reflecting the complexity of real emotions.
                    </p>

                    <p className="pb-6">
                        By expressing emotions through art and texts, HUES encourages audiences to stop and think about what they see and feel. HUES is also about connection. It utilizes technology and art to bridge the gap between inner feelings and outer expression. The project asks audiences to look beyond the surface of social media posts and consider the real emotions behind them. By transforming familiar social media content into art, it offers new perspectives on how people communicate their feelings online. This artistic approach to data visualization offers a unique way to explore the intersection of technology, art and human emotion in the digital age.
                    </p>

                </div>







            </main >

        </div >
    )
}

export default Hues