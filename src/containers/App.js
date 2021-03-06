import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './App.css';
import "./Animation.css";
import About from "../children/About.js";
import Portfolio from "../children/Portfolio.js";
import Contact from "../children/Contact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutClicked: false,
      portfolioClicked: false,
      contactClicked: false
    };
    this.showAbout = this.showAbout.bind(this);
    this.showPortfolio = this.showPortfolio.bind(this);
    this.showContact = this.showContact.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    const aboutClicked = this.state.aboutClicked;
    const portfolioClicked = this.state.portfolioClicked;
    const contactClicked = this.state.contactClicked;
    
    let renderThis = null;
    
    if (aboutClicked) {
      renderThis = <About/>;
    } else if (portfolioClicked) {
      renderThis = <Portfolio/>;
    } else if (contactClicked) {
      renderThis = <Contact/>;
    }
    return (
      <div className="folder" id="scale">
        <div className="folder-header">
          <button id="about-tab" onClick={ this.onClick }>ABOUT ME</button>
          <button id="portfolio-tab" onClick={ this.onClick }>PORTFOLIO</button>
          <button id="contact-tab" onClick={ this.onClick }>CONTACT ME</button>
        </div>
        <div className="folder-cover" id="rotate"></div>
        <div className="folder-pages">
          { renderThis }
        </div>
        <div className="folder-back"></div>
      </div>
    );
  }
  showAbout() {
    console.log("About clicked");
    this.setState({
      aboutClicked: true,
      portfolioClicked: false, 
      contactClicked: false
    }); 
  }
  showPortfolio() {
    console.log("Portfolio clicked");
    this.setState({
      aboutClicked: false,
      portfolioClicked: true, 
      contactClicked: false
    });      
  }
  showContact() {
    console.log("Contact clicked"); 
    this.setState({
      aboutClicked: false,
      portfolioClicked: false, 
      contactClicked: true
    }); 
  } 
  buttonClick() {
    console.log("A button was clicked!");
    const folderRotate = document.getElementById("rotate");
    folderRotate.classList.add("rotateFolder");
    const folderScale = document.getElementById("scale");
    folderScale.classList.add("scaleFolder");
  }
  onClick(e) {
    //this function isn't doing everything I want it to yet. 
    //how do I make it responsive? parse a value?
    this.showAbout();
    this.buttonClick();
  }
}

export default App;
/*function for animation:
folder rotate
  -rotate(90deg)
folder/page flip/unflip
  -need booleans (which tab clicked?/page clicked?)
  -transform-origin: left center
  -rotateY(-180)
  -perspective? 1000
  -translate 2s

I need a better way to know which tab is clicked. Say I have a value: about, portfolio, contact; if it is clicked, 
the value is parsed through to a function; which change's the boolean status for all the others?


<body>
  <div class="folder">
    <div class="folder-header">
      <button class="tab" value="about">About</button>
      <button class="tab" value="portfolio">Portfolio</button>
      <button class="tab" value="contact">Contact</button>
    </div>
    <div class="folder-cover"></div>
    <div class="page">
      { render function to display tab content }
    </div>
    <div class="folder-back"></div>    
  </div>
</body>



*/