// frontend/src/pages/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject } from '../services/projectService';
import { fetchClients, createClient } from '../services/clientService';
import { fetchContacts } from '../services/contactService';
import { fetchSubscribers } from '../services/subscriberService';

const AdminPanel = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [subscribers, setSubscribers] = useState([]);

    const [projectForm, setProjectForm] = useState({
        name: '',
        description: '',
        image: null
    });

    const [clientForm, setClientForm] = useState({
        name: '',
        designation: '',
        description: '',
        image: null
    });

    useEffect(() => {
        fetchProjects().then((res) => setProjects(res.data)).catch(console.error);
        fetchClients().then((res) => setClients(res.data)).catch(console.error);
        fetchContacts().then((res) => setContacts(res.data)).catch(console.error);
        fetchSubscribers().then((res) => setSubscribers(res.data)).catch(console.error);
    }, []);

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', projectForm.name);
        fd.append('description', projectForm.description);
        fd.append('image', projectForm.image);
        const res = await createProject(fd);
        setProjects((prev) => [res.data, ...prev]);
        setProjectForm({ name: '', description: '', image: null });
        e.target.reset();
    };

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', clientForm.name);
        fd.append('designation', clientForm.designation);
        fd.append('description', clientForm.description);
        fd.append('image', clientForm.image);
        const res = await createClient(fd);
        setClients((prev) => [res.data, ...prev]);
        setClientForm({ name: '', designation: '', description: '', image: null });
        e.target.reset();
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <h1>Admin Panel</h1>
                <p>Manage projects, clients, contact responses, and newsletter subscribers.</p>
            </header>

            <div className="admin-grid">
                <section className="admin-section">
                    <h2>Project Management</h2>
                    <form onSubmit={handleProjectSubmit} className="admin-form">
                        <input
                            type="text"
                            placeholder="Project Name"
                            value={projectForm.name}
                            onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Project Description"
                            value={projectForm.description}
                            onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProjectForm({ ...projectForm, image: e.target.files[0] })}
                            required
                        />
                        <button type="submit" className="btn-primary">Add Project</button>
                    </form>
                    <ul className="admin-list">
                        {projects.map((p) => (
                            <li key={p._id}>{p.name}</li>
                        ))}
                    </ul>
                </section>

                <section className="admin-section">
                    <h2>Client Management</h2>
                    <form onSubmit={handleClientSubmit} className="admin-form">
                        <input
                            type="text"
                            placeholder="Client Name"
                            value={clientForm.name}
                            onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Designation"
                            value={clientForm.designation}
                            onChange={(e) => setClientForm({ ...clientForm, designation: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Client Description"
                            value={clientForm.description}
                            onChange={(e) => setClientForm({ ...clientForm, description: e.target.value })}
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setClientForm({ ...clientForm, image: e.target.files[0] })}
                            required
                        />
                        <button type="submit" className="btn-primary">Add Client</button>
                    </form>
                    <ul className="admin-list">
                        {clients.map((c) => (
                            <li key={c._id}>{c.name} — {c.designation}</li>
                        ))}
                    </ul>
                </section>

                <section className="admin-section admin-section-full">
                    <h2>Contact Form Details</h2>
                    <div className="table-wrapper">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((ct) => (
                                    <tr key={ct._id}>
                                        <td>{ct.fullName}</td>
                                        <td>{ct.email}</td>
                                        <td>{ct.mobile}</td>
                                        <td>{ct.city}</td>
                                    </tr>
                                ))}
                                {contacts.length === 0 && (
                                    <tr>
                                        <td colSpan={4}>No contact entries yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="admin-section admin-section-full">
                    <h2>Subscribed Email Addresses</h2>
                    <ul className="admin-list">
                        {subscribers.map((s) => (
                            <li key={s._id}>{s.email}</li>
                        ))}
                        {subscribers.length === 0 && <li>No subscribers yet.</li>}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AdminPanel;
