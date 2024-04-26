import React from "react";
import { Button, Modal, Form, Tabs, Tab } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseConfig";
import './login.css'
import { Alert } from "react-bootstrap";

const LoginRegister = ({ show, onClose }) => {
  const [activeTab, setActiveTab] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [alerts, setAlerts] = React.useState([]);

  const handleClose = () => {
    setError(null);
    onClose();
  };
   const showAlert = (variant, message) => {
     const newAlert = { variant, message };
     setAlerts([...alerts, newAlert]);
   };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    if (!email || !password) {
      showAlert("danger", "Wrong Credentials, Please try again!");
      setError("Please fill in all fields");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      showAlert("success", "Login Successful!");
        console.log("Login Successful", user);
        setTimeout(() => {
          handleClose();
          window.location.href = "/products";
        }, 1000); 
      })
      .catch((error) => {
       showAlert("danger", "Wrong Credentials, Please try again!");
          setError(error.message);
      });
  };

  const handleRegister = () => {
    if (!email || !password) {
      showAlert("danger", "Please fill the all fields!");
      setError("Please fill in all fields");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showAlert("success", "Registration Successful!");
        console.log("Registration Successful", user);
       setTimeout(() => {
         handleClose();
         window.location.href = "/products";
       }, 1000); 
      })
      .catch((error) => {
        showAlert("danger", "Credentials are wrong please try again!");
        setError(error.message);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          variant={alert.variant}
          onClose={() => setAlerts(alerts.filter((_, i) => i !== index))}
          dismissible
        >
          {alert.message}
        </Alert>
      ))}
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
