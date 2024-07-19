import React from 'react';
import './Section.css';

const Home = () => {
    return (
        <section id="home">
            <div className="content-wrapper">
                <div className="content">
                    <h1>Best Medical Clinic</h1>
                    <p>Bringing Health To Life For The Whole Family...</p>
                    <button className="btn">Get Appointments</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
