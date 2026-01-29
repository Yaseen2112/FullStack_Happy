// frontend/src/pages/LandingPage.jsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProjects from '../components/OurProjects';
import HappyClients from '../components/HappyClients';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
    return (
        <Layout>
            <Hero />
            <WhyChooseUs />
            <OurProjects />
            <HappyClients />
            <ContactForm />
            <Newsletter />
        </Layout>
    );
};

export default LandingPage;
