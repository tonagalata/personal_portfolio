import React from "react";
import styles from "./About.module.css";


class About extends React.Component {
  
  state = {
    seeMore: false
  }
  
  
  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      seeMore: this.state.seeMore ? false : true
    })
  }
  
  
  render(){
  return (
    <div className={this.props.bgColor ? styles.bgChange : styles.innerSection}>
      <h2>About Me</h2>
      <div className={styles.content}>
        {
          !this.state.seeMore ?
        
        <p>
          My experiences as an immigrant from Ethiopia have shaped my ideals as
          a developer. My passion for building tools that not only influence the
          tech industry but also developing countries, leads me to seek
          opportunities at companies whose mission is user empowerment...
        </p> : 
        <p>
        My experiences as an immigrant from Ethiopia have shaped my ideals as
        a developer. My passion for building tools that not only influence the
        tech industry but also developing countries, leads me to seek
        opportunities at companies whose mission is user empowerment
      </p> 

        }
        {
          this.state.seeMore ?
        <div>
          <p>
          I am a problem solver that enjoys puzzles and complex issues that require a deeper dive and a detailed eye to resolve. I enjoy learning and working on my own, but I am always up for working with a team. My passion is building tools that change the world for the better.
          </p>
          <p>
            My years of experience in the non-profit and fundraising world has
            instilled in me a passion for working with financial data and creating complex data analytic tools and reports.
          </p>
          <span>Projects I would be interested in include, but are not limited to:</span>
          <ul className="browser-default">
            <li>SMS/Mobile Payment Processing</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Language Translation</li>
            <li>Pathfinding/Mapping Software</li>
          </ul>
          <p>
            Languages and Frameworks I have experience in: 
            <ul className="browser-default">
              <li>Javascript</li>
              <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>Python & Django</li>
              <li>PostgrSQL & PL/SLQ</li>
            </ul>
          </p>
          <span className='btn' onClick={this.handleClick}>close</span>
        </div>
             : <>
               <span className='btn' onClick={this.handleClick}>read more</span>
               </>}
      </div>
    </div>
  );
}

};

export default About;
