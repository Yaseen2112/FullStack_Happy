// frontend/src/components/WhyChooseUs.jsx
import React from 'react';
import groupIcon from '../assets/icons/Group-1.svg';
import frameIcon from '../assets/icons/Frame.svg';
import paintbrushIcon from '../assets/icons/paintbrush-2.svg';
import shapeRect54 from '../assets/shapes/Rectangle 54.svg';
import shapeRect55 from '../assets/shapes/Rectangle 55.svg';

const WhyChooseUs = () => {
    return (
        <section id="why" className="why-section">
            <img src={shapeRect54} alt="" className="why-bg-rect why-bg-rect-1" />
            <img src={shapeRect55} alt="" className="why-bg-rect why-bg-rect-2" />

            <div className="section-header">
                <span className="section-kicker">Why Choose Us</span>
                <h2>Not Your Average Real Estate Marketer</h2>
                <p>
                    We combine strategic consulting, creative design, and performance marketing to help real
                    estate brands grow faster.
                </p>
            </div>

            <div className="why-grid">
                <div className="why-card">
                    <img src={groupIcon} alt="" className="why-icon" />
                    <h3>Data‑Driven Strategy</h3>
                    <p>
                        Campaigns built on real numbers, market insights, and performance dashboards so you know
                        exactly what works.
                    </p>
                </div>
                <div className="why-card">
                    <img src={frameIcon} alt="" className="why-icon" />
                    <h3>High‑Converting Funnels</h3>
                    <p>
                        Conversion‑focused landing pages and forms that turn cold traffic into sales‑ready
                        leads.
                    </p>
                </div>
                <div className="why-card">
                    <img src={paintbrushIcon} alt="" className="why-icon" />
                    <h3>Premium Creative</h3>
                    <p>
                        Polished visuals and messaging tailored to premium property buyers and investors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
