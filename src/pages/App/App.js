import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import LatestProject from "../../components/LatestProject/LatestProject";
import GitHubReactCalendar from '../../components/GitHubReactCalendar/GitHubReactCalendar'
import "./App.css";
// import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Footer from "../../components/Footer/Footer";
import Maintenance from "../../components/Maintenance/Maintenance";

class App extends Component {
  state = {
    darkBG: false,
    maintenance: true
  }

  handleColorChange = (e) => {
    e.preventDefault()
    this.setState({
      darkBG: this.state.darkBG ? false : true
    })
  }

  render() {
    return (
      this.state.maintenance ?
      <Maintenance />
      :
      <div className={this.state.darkBG ? `bg-container-color` : `App-container`}>
        <div className="App-outer-container">
          <Header handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/>
          <div className="App-inner-container container">
            <div className="main-container">
              <About handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/>
              <LatestProject handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/>
              {/* <WorkExperience handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/> */}
              <div className="github-section">
              <GitHubReactCalendar handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/>
              </div>
            </div>
            <div className="side-container">
              <Skills handleColorChange={this.handleColorChange} bgColor={this.state.darkBG} />
              <Education handleColorChange={this.handleColorChange} bgColor={this.state.darkBG} />
            </div>
          </div>
          <Footer handleColorChange={this.handleColorChange} bgColor={this.state.darkBG}/>
        </div>
      </div>
    );
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

export default App;