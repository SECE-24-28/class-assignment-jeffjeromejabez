import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let errorMes = {};
        
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        if (!formData.name) {
            errorMes.name = "Name is required";
        } else if (!nameRegex.test(formData.name)) {
            errorMes.name = "Name must be at least two characters and contain only letters";
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errorMes.email = "Email field is required";
        } else if (!emailRegex.test(formData.email)) {
            errorMes.email = "Invalid email";
        }
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
        if (!formData.password) {
            errorMes.password = "Password is required";
        } else if (!passwordRegex.test(formData.password)) {
            errorMes.password = "Password must be greater than eight characters with uppercase, lowercase, and number";
        }
        
        setErrors(errorMes);
        return Object.keys(errorMes).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Registration successful:", formData);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{position: 'relative', marginBottom: '20px'}}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{padding: '8px', width: '200px'}}
                    />
                    {errors.name && (
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            right: '-250px',
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                backgroundColor: '#ff9500',
                                color: 'white',
                                borderRadius: '3px',
                                padding: '2px 6px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>!</span>
                            {errors.name}
                        </div>
                    )}
                </div>
                <div style={{position: 'relative', marginBottom: '20px'}}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{padding: '8px', width: '200px'}}
                    />
                    {errors.email && (
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            right: '-250px',
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                backgroundColor: '#ff9500',
                                color: 'white',
                                borderRadius: '3px',
                                padding: '2px 6px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>!</span>
                            {errors.email}
                        </div>
                    )}
                </div>
                <div style={{position: 'relative', marginBottom: '20px'}}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{padding: '8px', width: '200px'}}
                    />
                    {errors.password && (
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            right: '-250px',
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                backgroundColor: '#ff9500',
                                color: 'white',
                                borderRadius: '3px',
                                padding: '2px 6px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>!</span>
                            {errors.password}
                        </div>
                    )}
                </div>
                <button type="submit">Register</button>
            </form>
            <p style={{marginTop: '20px'}}>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default Register;