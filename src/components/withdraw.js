import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState(true);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  // const [balance, setBalance] = React.useState({ balance });
  const [balance, setBalance] = useState("");

  function handle() {
    console.log(amount);
    console.log(balance);
    if (!amount || amount.length < 1 || amount <= 0)
      alert("Error: Please enter a valid amount");
    else if (isNaN(amount)) alert("Error: Please enter a valid number");
    else if (Number({ amount }) > Number({ balance }))
      alert("Error: insufficient funds");
    else {
      console.log(`withdrawing $${amount}`);
      fetch(`/account/update/${email}/-${amount}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            console.log(text);
            const data = JSON.parse(text);
            setBalance(data.value.balance);
            setStatus(false);
            // e.preventDefault();
            setShow(false);
            console.log(`New balance: $${data.value.balance}`);
          } catch (err) {
            setStatus("Withdrawal failed");
            console.log("err:", text);
          }
        });
    }
  }

  const clearForm = () => {
    setAmount("");
    setShow(true);
    setStatus(true);
  };

  return (
    <Card
      bgcolor="danger"
      header="Withdrawal"
      body={
        show ? (
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
                setStatus(false);
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
                setStatus(false);
              }}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={status}
              onClick={handle}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            Email: {email} <br />
            Balance: ${balance}
            <br /> <br />
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Withdraw again
            </button>
          </>
        )
      }
    />
  );
}

export default Withdraw;
