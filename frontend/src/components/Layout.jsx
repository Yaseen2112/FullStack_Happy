// frontend/src/components/Layout.jsx
import React from 'react';
import logo from '../assets/images/logo.svg';

const Layout = ({ children }) => {
    return (
        <div className="app-root">
            <header className="app-header">
                <div className="header-left">
                    <img src={logo} alt="Logo" className="header-logo" />
                    <span className="header-brand">Real Trust</span>
                </div>
                <nav className="header-nav">
                    <a href="#why">Why Choose Us</a>
                    <a href="#projects">Projects</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="app-footer">
                <p>© {new Date().getFullYear()} Real Trust. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
