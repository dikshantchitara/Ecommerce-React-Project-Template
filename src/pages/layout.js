import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import LoginRegister from "./LoginRegister";
import { auth } from "./firebaseConfig";
import "./layout.css";
import { Alert } from "react-bootstrap"; // Import Bootstrap's Alert component

const Layout = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false); // State for logout alert

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    const alertTimeout = 1000; // 3 seconds
    const logoutMessage = "You have been logged out.";

    // Show alert
    setShowLogoutAlert(true);

    // Logout after delay
    setTimeout(() => {
      auth
        .signOut()
        .then(() => {
          setUser(null);
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    }, alertTimeout);
  };

  return (
    <>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/blogs" style={linkStyle}>
              Blogs
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/aboutus" style={linkStyle}>
              AboutUs
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/news" style={linkStyle}>
              News
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/faq" style={linkStyle}>
              FAQ
            </Link>
          </li>
          <li style={liStyle}>
            {user ? (
              <button className="button-40" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="button-40" onClick={handleLoginClick}>
                Login/Register
              </button>
            )}
          </li>
        </ul>
      </nav>
      {/* Logout alert */}
      <Alert
        variant="info"
        show={showLogoutAlert}
        onClose={() => setShowLogoutAlert(false)}
        dismissible
      >
        You have been logged out.
      </Alert>
      <Outlet />

      {/* Render LoginRegister component as a modal */}
      {showLoginModal && (
        <LoginRegister show={showLoginModal} onClose={handleCloseLoginModal} />
      )}
    </>
  );
};

// Styles
const navStyle = {
  backgroundColor: "#FF9494",
  padding: "10px",
};

const ulStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
};

const liStyle = {
  display: "inline",
  margin: "0 10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Layout;
