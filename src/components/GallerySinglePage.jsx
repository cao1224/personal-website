import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../sections/navBar/Navbar';

const GallerySinglePage = () => {
    const { title } = useParams(); // Get the title from the URL
    const location = useLocation();
    const { images, galleryLocation } = location.state || {};

    useEffect(() => {
        document.title = title + ' - Kaleo Cao'; // Set the document title dynamically
    }, [title]); // Update title whenever the 'title' prop changes

    return (
        <div>
            <Navbar />
            <main className="container">
                <div className='container'>

                    <div className="col-12 col-md-10 col-lg-8">
                        <h2 className="row text-capitalizeer">{title}</h2>
                        <div className='row'>
                            {galleryLocation && (
                                <p style={{ padding: '0' }}>📍 Location:{" "}
                                    <a
                                        href={galleryLocation.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="location-link"
                                    >
                                        {galleryLocation.name}
                                    </a>
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="row mt-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-4"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}

                                />
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
};


export default GallerySinglePage