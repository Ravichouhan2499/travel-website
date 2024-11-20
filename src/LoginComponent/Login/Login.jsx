import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth, database } from "../../Config";
import { doc, getDoc } from "firebase/firestore";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserFooter from "../../userComponent/userFooter/userFooter";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Email = useRef();
  const Pass = useRef();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  {error && <div className="error-message">{error}</div>}


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        Auth,
        Email.current.value,
        Pass.current.value
      );

      // Check user role from Firestore
      const userDoc = await getDoc(
        doc(database, "agent", userCredential.user.uid)
      );

      if (userDoc.exists()) {
        const role = userDoc.data().role;

        // Redirect based on role
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/agent/dashboard");
        }
      }
    } catch (error) {
        setError('Login failed. Please check your details.');
      console.error(error);
    }

    setLoading(false);
  };

  return (<>
    <div className="login-page">
      <div className="background-wrapper">
        <div className="content-container">
          <div className="centered-content">
            <header className="company-header">
              <h1 className="company-name">
                <span className="highlight">AVANTIKA</span> VACATIONS
              </h1>
              <p className="company-tagline">A Complete Travel Solution</p>
            </header>
            <main className="login-section">
              <div className="login-box">
                <h2 className="login-title">Login</h2>
                {error && <div className="error-message">{error}</div>}
                <form className="login-form" onSubmit={handleLogin}>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input ref={Email} type="email" required />
                  </div>
                  <div className="input-group">
                  <label>Password</label>
                    <input
                      ref={Pass}
                      type={showPassword ? "text" : "password"} // Toggle input type
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="toggle-password"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                      {/* Icon changes */}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>
                {/* <span>
                  <br />
                  If you are not registered ?{" "}
                  <Link to="/agent/signup">register here</Link>
                </span> */}
                <br />

                <span>
                  <Link to="/">Back to Home</Link>
                </span>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
    <UserFooter/>
    </>

  );
}
