import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CarouselSlide from '../../components/CarouselSlide';

import Navbar from '../navBar/Navbar';


const Gallery = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Photography Gallery - Kaleo Cao";
      }, [])

    const sunlit_horizons_images = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sunlit_horizons/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sunlit_horizons/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sunlit_horizons/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sunlit_horizons/img-4.png'
    ];

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

    const lv_real_bodies = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-4.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-5.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-6.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/real-bodies/img-7.png'
    ];

    const sd_farmer_market = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-4.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-5.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-6.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-7.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-8.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-9.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-10.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-11.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-12.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-13.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/farmer-market/img-14.png',
    ];

    const sea_images = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sea/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sea/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sea/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sea/img-4.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/sea/img-5.png',
    ];

    const blackNwhite_images = [
        'https://photography-gallery.s3.us-east-2.amazonaws.com/blackNwhite/img-1.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/blackNwhite/img-2.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/blackNwhite/img-3.png',
        'https://photography-gallery.s3.us-east-2.amazonaws.com/blackNwhite/img-4.png',
    ];


    const handleNavigate = (title, images, galleryLocation) => {
        navigate(`/gallery/${encodeURIComponent(title)}`, { state: { images, galleryLocation } });
    };


    return (
        <div>
            <Navbar />
            <main className='container'>
                <div className="container">
                    <h1 className="text-capitalize font-weight-bold">photography gallery</h1>
                    <p>Welcome to this photography gallery! Here, you'll discover a collection of moments captured during travels and spontaneous experiences. Whether taken at famous attractions with a camera or snapped on the go with a phone, each photo showcases unique moments and the ever-changing beauty of nature. The photographer hopes these images convey the joy and wonder experienced while capturing them. Enjoy exploring the stories behind each shot!</p>
                </div>


                <div className='container pt-6'>
                    <div className="row gx-3 gy-4">
                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate('Sunlit Horizons', sunlit_horizons_images)}
                        >
                            <CarouselSlide id="carousel0" images={sunlit_horizons_images} title="Sunlit Horizons"/>
                        </div>

                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate('Body and Mind', lv_real_bodies, { name: 'REAL BODIES VEGAS (located at Horseshoe)', link: 'https://www.realbodiesvegas.com/' })}
                        >
                            <CarouselSlide id="carousel1" images={lv_real_bodies} title="Body and Mind"/>
                        </div>

                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate('Zoo', sd_zoo_images, { name: 'San Diego Zoo', link: 'https://sandiegozoowildlifealliance.org/' })}
                        >
                            <CarouselSlide id="carousel2" images={sd_zoo_images} title="Zoo"/>
                        </div>

                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate("Scenes from the Farmers' Market", sd_farmer_market)}
                        >
                            <CarouselSlide id="carousel3" images={sd_farmer_market} title="Scenes from the Farmers' Market"/>
                        </div>
                        
                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate("Sea", sea_images)}
                        >
                            <CarouselSlide id="carousel4" images={sea_images} title="Sea"/>
                        </div>

                        <div 
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                            onClick={() => handleNavigate("Black and White", blackNwhite_images)}
                        >
                            <CarouselSlide id="carousel5" images={blackNwhite_images} title="Black and White"/>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Gallery