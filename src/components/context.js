import React, { Component, createContext } from "react";
import { AuthDetails } from "./authDetails";

export const UserContext = createContext();

// Define the Card component outside of the state
const Card = (props) => {
  const classes = () => {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  };

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
};

class UserContext extends Component {
  state = {
    loggedInUser: null,
    balance: 0,
  };

  // Define methods to update the state as needed
  // For example, a method to log in a user and update the loggedInUser property:
  login = (user) => {
    this.setState({ loggedInUser: user });
  };

  // A method to update the balance when a deposit is made:
  deposit = (amount) => {
    this.setState({ balance: this.state.balance + amount });
  };

  // A method to update the balance when a withdrawal is made:
  withdraw = (amount) => {
    this.setState({ balance: this.state.balance - amount });
  };

  render() {
    return (
      <UserContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContext, Card };
