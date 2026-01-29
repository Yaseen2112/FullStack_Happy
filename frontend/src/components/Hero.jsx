// frontend/src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/images/pexels-andres-ayrton-6578391.svg';
import circleDollar from '../assets/icons/circle-dollar-sign.svg';
import homeIcon from '../assets/icons/home.svg';
import linkedinIcon from '../assets/icons/Linkedin.svg';
import ellipse7 from '../assets/shapes/Ellipse 7.svg';
import ellipse8 from '../assets/shapes/Ellipse 8.svg';
import groupShape from '../assets/shapes/Group 10000001645.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <img src={ellipse7} alt="" className="hero-shape hero-shape-1" />
            <img src={ellipse8} alt="" className="hero-shape hero-shape-2" />
            <img src={groupShape} alt="" className="hero-shape hero-shape-3" />

            <div className="hero-inner">
                <div className="hero-left">
                    <h1>Consultation, Marketing & Real Estate Lead Generation</h1>
                    <p>
                        Turn visitors into qualified leads with strategic campaigns, conversion‑driven landing
                        pages, and data‑backed marketing decisions.
                    </p>

                    <div className="hero-cta-row">
                        <button className="btn-primary">
                            <img src={circleDollar} alt="" />
                            Get Free Consultation
                        </button>
                        <button className="btn-secondary">
                            <img src={homeIcon} alt="" />
                            Explore Our Services
                        </button>
                    </div>

                    <div className="hero-meta-row">
                        <span>Trusted by real estate leaders worldwide</span>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-linkedin"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-image-wrapper">
                        <img src={heroImage} alt="Consultation" className="hero-main-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
