import React from "react";
import { Button, Modal, Form, Tabs, Tab } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseConfig";
import './login.css'

const LoginRegister = ({ show, onClose }) => {
  const [activeTab, setActiveTab] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClose = () => {
    setError(null);
    onClose();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successfully Done!");
        console.log("Login Successful", user);
        handleClose();
        window.location.href = "/products";
      })
      .catch((error) => {
        alert("Credentials are wrong please try again ");
        setError(error.message);
      });
  };

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please Fill in all fields");
      setError("Please fill in all fields");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Registration Successful");
        console.log("Registration Successful", user);
        handleClose();
      })
      .catch((error) => {
        alert("Credentials Are Wrong Please try again!");
        setError(error.message);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login/Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={activeTab} onSelect={handleTabChange}>
          <Tab eventKey="login" title="Login" className="login-tab-title">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register" className="login-tab-title">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button variant="primary" onClick={handleRegister}>
                Register
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginRegister;
