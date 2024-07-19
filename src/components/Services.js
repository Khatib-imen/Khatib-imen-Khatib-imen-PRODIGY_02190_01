// src/components/Services.js
import React from 'react';
import './Section.css';
import servicesImage from '../images/service.png'; // Ensure the correct path to the image

const Services = () => {
    return (
        <section id="services">
            <div className="content-wrapper">
                <div className="text-content">
                    <h1>Our Services</h1>
                    <p>Explore the wide range of medical services we offer to cater to your health needs.</p>
                </div>
                <div className="image-content">
                    <img src={servicesImage} alt="Our Services" />
                </div>
            </div>
        </section>
    );
};

export default Services;
