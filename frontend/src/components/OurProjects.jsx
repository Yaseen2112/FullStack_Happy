// frontend/src/components/OurProjects.jsx
import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import rectShape from '../assets/images/Rectangle.svg';

const OurProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects()
            .then((res) => setProjects(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <span className="section-kicker">Our Work</span>
                <h2>Our Projects</h2>
                <p>Explore some of the campaigns and projects we have delivered for our clients.</p>
            </div>

            <img src={rectShape} alt="" className="projects-bg-rect" />

            <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project._id} className="project-card">
                        <div className="project-image">
                            <img src={project.imageUrl} alt={project.name} />
                        </div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <button className="btn-outline">Read More</button>
                    </article>
                ))}
                {projects.length === 0 && (
                    <p className="empty-text">No projects yet. Add some from the admin panel.</p>
                )}
            </div>
        </section>
    );
};

export default OurProjects;
