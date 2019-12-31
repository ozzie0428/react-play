import React, { Component } from "react";

import Welcome1 from "./components/Landing/Welcome";
import Toodles, { SayHelloBye, GoodBye } from "./components/Landing/Goodbye";
import logo from "./logo.svg";
import "./App.css";

// function test(params) {
//   console.log("heii");
// }
// let button = document.querySelector(".addButton");
// button = document.activeElement("click", test);
class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Jean",
      lastName: "Altidor",
      addresses: [
        { streetName: "701 Tuxwroth" },
        { streetName: "545 eagle Drive" }
      ]
    };
  }

  render() {
    function test(params) {
      // console.log("hi", params ? params : "Ozzie");
      console.log("hi", "Ozzie");
    }
    return (
      <div>
        <button onClick={test}>Add</button>
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        {this.state.addresses.map((k, index) => {
          return <h2 key={`${index}-${k.streetName}`}>{k.streetName}</h2>;
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Welcome1 />
        <GoodBye />
        <SayHelloBye />
        <Toodles />
        <p>
          Edit <code>src/App.js</code> and save Ozzie.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
