// src/components/Contact.js
import React from 'react';
import './Section.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="content-wrapper">
                <div className="text-content">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us for more information or to schedule an appointment.</p>
                </div>
                <div className="info-grid">
                    <div className="info">
                        <h2>Contact Info</h2>
                        <p>Suite 02 New Elephant Road USA</p>
                        <p>+880 142 258 123, 02-96936</p>
                        <p>info@mukti.com</p>
                        <p>info@mukti.com</p>
                    </div>
                    <div className="info">
                        <h2>Our Doctors</h2>
                        <p>Dr. Nick Sims</p>
                        <p>Dr. Michael Linden</p>
                        <p>Dr. Max Turner</p>
                        <p>Dr. Amy Adams</p>
                        <p>Dr. Julia Jameson</p>
                        <p>Dr. Michael Linden</p>
                    </div>
                    <div className="info">
                        <h2>Our Services</h2>
                        <p>Outpatient Surgery</p>
                        <p>Cardiac Clinic</p>
                        <p>Ophthalmology Clinic</p>
                        <p>Gynaecological Clinic</p>
                        <p>Outpatient Rehabilitation</p>
                        <p>Ophthalmology Clinic</p>
                    </div>
                    <div className="info">
                        <h2>Opening Hours</h2>
                        <p>Saturday: 8:00 am - 10:00 pm</p>
                        <p>Sunday: 6:00 am - 8:00 pm</p>
                        <p>Monday: 6:00 am - 2:00 pm</p>
                        <p>Tuesday: 7:00 am - 9:00 pm</p>
                        <p>Wednesday: 10:00 am - 12:00 pm</p>
                        <p>Thursday: 2:00 am - 6:00 pm</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
