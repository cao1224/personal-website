import React, { useRef, useState, useEffect } from 'react';

import Navbar from '../../navBar/Navbar';


const ChromaticCataclysm = () => {

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
                        Technique: p5.js<br />
                        Code: <a href="https://editor.p5js.org/Cao1224/sketches/E8UEeOs7b" target='_blank' style={{ color: '#0000EE', textDecoration: 'underline' }}>https://editor.p5js.org/Cao1224/sketches/E8UEeOs7b</a>
                    </div>

                    <p className='pt-6 pb-4'>
                        Chromatic Cataclysm is inspired by growing environmental concerns and technological advances. Visual inspiration comes from underwater documentaries, pollution imagery and futuristic sci-fi concepts. The motivation behind this work is to raise awareness of pressing global issues. Therefore, I chose to create an interactive short film that blends beautiful landscapes with horrific ones to capture the viewer's attention, aiming to make them think about their own role in shaping the world. I wanted to show these big issues in a way that would make people feel and take action.
                    </p>

                    <div className='pb-4'>
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

                    <p className='pb-4'>
                        The film begins calmly, with colorful tropical fish swimming in clear water. This calm scene suggests that we may be missing something. This vivid, colorful beginning represents our world today and its natural beauty. The viewer can use the right arrow key to change the speed at which the fish swims and is immediately engaged in the experience.
                    </p>

                    <p className='pb-4'>
                        Then everything changes. The screen darkens and thunder roars. A girl's voice narrates that in the year 2025 there will be no more tropical fish to be seen, only “surreal catastrophes”. This sudden shift signals a horrific future that is just around the corner if we don't take action.
                    </p>

                    <p className='pb-4'>
                        The calm underwater scene is replaced by a world of chaos. Plastic, dead leaves and garbage fall from the sky, polluting the once clear waters. The background colors change to red, orange and yellow, suggesting a hotter, harsher environment. An earthquake shakes the scene, and viewers can use the Shift key to make buildings tremble, emphasizing the instability of the world.
                    </p>

                    <p className='pb-4'>
                        The film then introduces the rise of artificial intelligence, with robotic voices delivering cold, factual messages. Human laughter echoes in the background, suggesting the role of human greed and selfishness in this anti-utopian future.
                        In the final sequence, blood floats across the screen, accompanied by the cries of humans and babies. A tense soundtrack plays, accompanied by desperate cries for help, creating a deeply disturbing ending.

                    </p>


                    <p className='pb-6'>
                        Chromatic Cataclysm presents a dark picture of where we could be headed: if we don't change the way we treat the earth and use artificial intelligence, we could lose the goodness around us. However, this interactive film isn't just trying to scare people. By showing this possible future, it hopes to motivate viewers to take immediate steps to protect our world. By blending beautiful and scary scenes, the film aims to make people care more about nature; and by incorporating interactive elements through keyboard controls, such as changing the speed of a fish or a shaking building, it gives viewers a deeper sense of what is happening.
                    </p>



                </div>

            </main >

        </div >
    )
}

export default ChromaticCataclysm