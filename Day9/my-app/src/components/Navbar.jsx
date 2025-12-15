import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            width: '100vw',
            backgroundColor: '#f8f9fa',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Login</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;