import React from 'react';
import { Link } from 'react-router-dom';

function NavBarcomp() {
    return (
        <nav style={{
            width: '100vw',
            backgroundColor: 'black',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}>Home</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}>Login</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}>Register</Link>
            </div>
        </nav>
    );
}

export default NavBarcomp;