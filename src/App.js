import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./reset.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu-close"
    };
  }

  toggleMenu = () => {
    if (this.state.menuStatus === "menu-open") {
      this.setState({ menuStatus: "menu-close" });
    } else {
      this.setState({ menuStatus: "menu-open" });
    }
    console.log(this.state.menuStatus);
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul className="ul__navbar">
            <li className="bootstrap">Start Bootstrap</li>
            <div className="right__nav">
              <li className="right__nav__name">SERVICES</li>
              <li className="right__nav__name">PORTFOLIO</li>
              <li className="right__nav__name">ABOUT</li>
              <li className="right__nav__name">TEAM</li>
              <li className="right__nav__name">CONTACT</li>
              <i onClick={this.toggleMenu} className="fas fa-bars" />
            </div>
          </ul>
        </nav>
        <div className={this.state.menuStatus}>
          <ul className="drop__ul">
            <li className="drop__list">SERVICES</li>
            <li className="drop__list">PORTFOLIO</li>
            <li className="drop__list">ABOUT</li>
            <li className="drop__list">TEAM</li>
            <li className="drop__list">CONTACT</li>
          </ul>
        </div>
        <header className="header">
          <div className="header-container">
            <h2 className="welcome">Welcome To Our Studio!</h2>
            <h1 className="nice">IT'S NICE TO MEET YOU</h1>
            <button className="button">TELL ME MORE</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
