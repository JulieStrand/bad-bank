import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bg="secondary"
      text="white"
      className="mx-auto mt-5"
      style={{ maxWidth: "18rem" }}
    >
      <Card.Header>BadBank Login</Card.Header>
      <Card.Body>
        <Card.Title>Please log in</Card.Title>
        <div>{status}</div>
        {show ? (
          <LoginForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <LoginMsg setShow={setShow} setStatus={setStatus} />
        )}
      </Card.Body>
    </Card>
  );
};

function LoginMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handle(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <Button type="submit" className="btn btn-light" onClick={handle}>
        Login
      </Button>
    </>
  );
}

export default Login;
