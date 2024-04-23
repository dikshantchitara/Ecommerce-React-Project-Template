import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import LoginRegister from "./LoginRegister";
import { auth } from "./firebaseConfig";
import './layout.css'


const Layout = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

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
    auth
      .signOut()
      .then(() => {
        setUser(null);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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

      <Outlet />

      {/* Render LoginRegister component as a modal */}
      <LoginRegister
        key={showLoginModal}
        show={showLoginModal}
        onClose={handleCloseLoginModal}
      />
    </>
  );
};

// Styles
const navStyle = {
  backgroundColor: "#333",
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
