import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar";
import { UserContext } from "./components/context";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import Balance from "./components/balance";
import AllData from "./components/alldata";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserContext>
          <div>
            <NavBar />
            <UserContext.Provider value={{}}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/createaccount" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/deposit" component={Deposit} />
                <Route path="/withdraw" component={Withdraw} />
                <Route path="/balance" component={Balance} />
                <Route path="/alldata" component={AllData} />
              </Routes>
            </UserContext.Provider>
          </div>
        </UserContext>
      </BrowserRouter>
    );
  }
}

export default App;
