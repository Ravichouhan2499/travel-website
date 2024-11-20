import React, { useRef, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { Auth, database } from '../../Config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { Contact } from 'lucide-react';

export default function Agent() {
    const agEmail = useRef();
    const agNumber = useRef();
    const agPwd = useRef();
    const agName = useRef();
    
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Check for success message in location state
    useEffect(() => {
        if (location.state?.showMessage) {
            setMessage(location.state.messageText);
            // Clear the message after 3 seconds
            const timer = setTimeout(() => {
                setMessage('');
                // Clear the navigation state
                navigate('.', { state: null, replace: true });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [location, navigate]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const Add = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);

        try {
            const currentUser = Auth.currentUser;
            // Create new user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                Auth,
                agEmail.current.value,
                agPwd.current.value
            );

            // Add additional agent details to Firestore
            await setDoc(doc(database, 'agent', userCredential.user.uid), {
                id : userCredential.user.uid,
                name : agName.current.value,
                email: agEmail.current.value,
                contact: agNumber.current.value,
                role: 'agent',
                createdAt: new Date().toISOString()
            });

            await signOut(Auth);

            // Re-authenticate the admin user if there was one
            if (currentUser) {
                await Auth.updateCurrentUser(currentUser);
            }

            // Reset form
            e.target.reset();

            // Navigate with success message
            navigate('/admin/agent', {
                state: { 
                    showMessage: true,
                    messageText: 'Agent added successfully!'
                },
                replace: true
            });

        } catch (error) {
            console.error('Error adding agent:', error);
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already registered.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Invalid email address.');
            } else if (error.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters.');
            } else {
                setError('Error adding agent. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">Add Agent</h2>
                        {message && (
                            <div className="alert alert-success" role="alert">
                                {message}
                            </div>
                        )}
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <form onSubmit={Add}>
                        <div className="form-group">
                                <label><b>Agent Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    ref={agName}
                                    required
                                    placeholder="Enter agent's Name"
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Agent Email</b></label>
                                <input 
                                    type="email" 
                                    ref={agEmail} 
                                    className="form-control" 
                                    required
                                    placeholder="Enter agent's email"
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Phone Number</b></label>
                                <input 
                                    type="tel" 
                                    ref={agNumber} 
                                    className="form-control" 
                                    required
                                    placeholder="Enter agent's phone number"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                            </div>
                            <div className="form-group position-relative">
                                <label><b>Password</b></label>
                                <div className="input-group">
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        ref={agPwd} 
                                        className="form-control" 
                                        required
                                        placeholder="Enter password"
                                        minLength="6"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-info btn-block mt-3"
                                disabled={loading}
                            >
                                {loading ? 'Adding Agent...' : 'Add Agent'}
                            </button>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}