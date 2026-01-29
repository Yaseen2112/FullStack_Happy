// frontend/src/components/HappyClients.jsx
import React, { useEffect, useState } from 'react';
import { fetchClients } from '../services/clientService';
import ellipse28 from '../assets/images/Ellipse 28.svg';
import ellipse29 from '../assets/images/Ellipse 29.svg';

const HappyClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients()
            .then((res) => setClients(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section id="clients" className="clients-section">
            <img src={ellipse28} alt="" className="clients-bg-ellipse clients-bg-ellipse-1" />
            <img src={ellipse29} alt="" className="clients-bg-ellipse clients-bg-ellipse-2" />

            <div className="section-header">
                <span className="section-kicker">Testimonials</span>
                <h2>Happy Clients</h2>
                <p>Here’s what our clients say after working with our team.</p>
            </div>

            <div className="clients-grid">
                {clients.map((client) => (
                    <article key={client._id} className="client-card">
                        <div className="client-avatar">
                            <img src={client.imageUrl} alt={client.name} />
                        </div>
                        <p className="client-quote">{client.description}</p>
                        <h3>{client.name}</h3>
                        <span className="client-role">{client.designation}</span>
                    </article>
                ))}
                {clients.length === 0 && (
                    <p className="empty-text">No clients yet. Add them from the admin panel.</p>
                )}
            </div>
        </section>
    );
};

export default HappyClients;
