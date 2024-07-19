// src/components/About.js
import React from 'react';
import './Section.css';
import aboutImage from '../images/about.png'; // Ensure the correct path to the image

const About = () => {
    return (
        <section id="about">
            <div className="content-wrapper">
                <div className="image-content">
                    <img src={aboutImage} alt="About Us" />
                </div>
                <div className="text-content">
                    <h1>About Us</h1>
                    <p>We are dedicated to providing the best healthcare services.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
