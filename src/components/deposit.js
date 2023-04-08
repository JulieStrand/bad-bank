import React, { useState, useContext } from "react";
import { MyContext, Card, UserContext } from "./context";

function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <DepositMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

const clearForm = (props) => {
  props.setEmail("");
  props.setAmount("");
  props.setShow(true);
};

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <br />
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
          clearForm();
        }}
      >
        Make another deposit
      </button>
      <br />
      <p>Current balance: $</p>
    </>
  );
}

function DepositForm(props) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  function handle() {
    if (!amount || amount.length < 1 || amount <= 0)
      alert("Error: Please enter a valid amount");
    else if (isNaN(amount)) alert("Error: Please enter a valid number");
    else {
      console.log(`depositing $${amount}`);
      fetch(`/account/update/${email}/${amount}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            console.log("making deposit...");
            const data = JSON.parse(text);
            console.log("setting props...");
            const bal = data.value.balance;
            props.setStatus(data.value.balance);
            // e.preventDefault();
            props.setShow(false);
            console.log(`New balance: $${data.value.balance}`);
          } catch (err) {
            props.setStatus("Deposit failed");
            console.log("err:", text);
          }
        });
    }
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
      <br />
      Amount
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.currentTarget.value);
        }}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Deposit
      </button>
    </>
  );
}

export default Deposit;
