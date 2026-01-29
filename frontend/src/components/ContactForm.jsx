// frontend/src/components/ContactForm.jsx
import React, { useState } from 'react';
import { createContact } from '../services/contactService';
import blueprintImage from '../assets/images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg';

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');
        try {
            await createContact(form);
            setStatus('Thank you! We will contact you soon.');
            setForm({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            console.error(err);
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-left">
                <h2>Get a Free Consultation</h2>
                <p>Share your details and our experts will help you plan the next steps.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="btn-primary">
                        Get Quick Quote
                    </button>
                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>

            <div className="contact-right">
                <div className="contact-image-wrapper">
                    <img src={blueprintImage} alt="Consultation" />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
