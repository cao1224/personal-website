import React, { useRef, useState, useEffect } from 'react';
import CarouselSlide from '../../components/CarouselSlide';

import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';

const Gallery = () => {

    const sd_zoo_images = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-4.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-5.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-6.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-7.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-8.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-9.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-10.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-11.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-12.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-13.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/san_diego_zoo/img-14.png'
    ];

    const ls_real_bodies = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-4.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-5.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-6.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-7.png'
    ];


    return (
        <div>
            <Navbar />
            <main className='container'>
                <div className="container">
                    <h2 className="text-capitalize font-weight-bold">photography gallery</h2>
                    <p></p>
                </div>


                <div className='container'>
                    <div className="row gx-3 gy-4">
                        <div className="col-12 col-md-6">
                            <CarouselSlide id="carousel1" images={sd_zoo_images} />
                        </div>
                        <div className="col-12 col-md-6">
                            <CarouselSlide id="carousel2" images={ls_real_bodies} />
                        </div>
                    </div>
                </div>

            </main>


            <Footer />
        </div>
    )
}

export default Gallery