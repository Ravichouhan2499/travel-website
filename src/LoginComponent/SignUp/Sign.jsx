// import React, { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Auth, database } from '../../Config';
// import { doc, setDoc } from 'firebase/firestore';
// import './SignUp.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import UserFooter from '../../userComponent/userFooter/userFooter';

// export default function Signp() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const Email = useRef();
//   const Pass = useRef();

//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       // Create new user
//       const userCredential = await createUserWithEmailAndPassword(
//         Auth,
//         Email.current.value,
//         Pass.current.value
//       );

//       // Always set role as 'user' for new sign-ups
//       await setDoc(doc(database, 'agent', userCredential.user.uid), {
//         email: userCredential.user.email,
//         role: 'agent',
//         createdAt: new Date().toISOString()
//       });

//       // Redirect to user dashboard
//       navigate('/admin');
//     } catch (error) {
//       if (error.code === 'auth/email-already-in-use') {
//         setError('This email is already registered. Please log in.');
//       } else {
//         setError('Sign-up failed. Please check your details.');
//       }
//       console.error(error);
//     }    
//     setLoading(false);
//   };

//   return (<>
//     <div className="login-page">
//       <div className="background-wrapper">
//         <div className="content-container">
//           <div className="centered-content">
//             <header className="company-header">
//               <h1 className="company-name">
//                 <span className="highlight">AVANTIKA</span> VACATIONS
//               </h1>
//               <p className="company-tagline">A Complete Travel Solution</p>
//             </header>
//             <main className="login-section">
//               <div className="login-box">
//                 <h2 className="login-title">Add Agent</h2>
//                 {error && <div className="error-message">{error}</div>}
//                 <form className="login-form" onSubmit={handleSignUp}>
//                   <div className="input-group">
//                     <label>Email Address</label>
//                     <input ref={Email} type="email" required />
//                   </div>
//                   <div className="input-group">
//                   <label>Password</label>
//           <input
//             ref={Pass}
//             type={showPassword ? "text" : "password"} // Toggle input type
//             required
//           />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="toggle-password"
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icon changes */}
//           </button>
//         </div>
//                   <button type="submit" className="submit-btn" disabled={loading}>
//                     {loading ? 'Creating Account...' : 'Add Agent'}
//                   </button>
//                 </form>
//                 <span>
//                   <br/>   
//                   Already have a user ?  &nbsp; <Link to="/admin">Login</Link>
//                 </span>
//                <br/>
//                 <span>
//                  <Link to="/">Back to Home</Link>
//                 </span>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//     <UserFooter/>
//     </>
//   );
// }