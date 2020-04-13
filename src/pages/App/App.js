import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import LatestProject from "../../components/LatestProject/LatestProject";
import GitHubReactCalendar from '../../components/GitHubReactCalendar/GitHubReactCalendar'
import "./App.css";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App-container">
        <div className="App-outer-container">
          <Header />
          <div className="App-inner-container container">
            <div className="main-container">
              <About />
              <LatestProject/>
              <WorkExperience/>
              <div className="github-section">
              <GitHubReactCalendar />
              </div>
            </div>
            <div className="side-container">
              <Skills />
              <Education />
            </div>
          </div>
          <Footer/>
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