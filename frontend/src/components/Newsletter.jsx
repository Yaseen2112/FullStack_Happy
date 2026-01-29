
// frontend/src/components/Newsletter.jsx
import React, { useState } from 'react';
import { createSubscriber } from '../services/subscriberService';
import newsletterBg from '../assets/images/pexels-fauxels-3182834.svg';
import homeIcon from '../assets/icons/home.svg';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');
        try {
            await createSubscriber({ email });
            setStatus('Subscribed successfully!');
            setEmail('');
        } catch (err) {
            console.error(err);
            setStatus('You are already subscribed or an error occurred.');
        }
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-bg">
                <img src={newsletterBg} alt="" className="newsletter-bg-img" />
            </div>
            <div className="newsletter-inner">
                <div className="newsletter-text">
                    <h2>Get Marketing Insights in Your Inbox</h2>
                    <p>
                        Subscribe to receive actionable tips on real estate marketing, lead nurturing, and
                        campaign optimisation.
                    </p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div className="newsletter-input-wrapper">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn-primary">
                            <img src={homeIcon} alt="" />
                            Subscribe
                        </button>
                    </div>
                    {status && <p className="newsletter-status">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
