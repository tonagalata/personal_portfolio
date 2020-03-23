import React from "react";
import styles from "./Skills.module.css";

const Skills = props => {
  return (
    <div className={styles.innerSection}>
      <h2>Skills</h2>
      <div className={styles.content}>
        <p>
            SMS/Mobile Payment Processing
            Artificial Intelligence and Machine Learning
            Language Translation
            Pathfinding/Mapping Software
        </p>
        <div className={styles.progressLevel}>
          <ul>
            <li>
              <h5>Python</h5>
              <div>Frameworks and Libraries:</div>
              <div>
                <p>Django</p>
                <p>NumPy</p>
                <p>Pandas</p>
                <p>Matplotlib</p>
                <p>Scikit-Learn</p>
              </div>
              {/* <div className="progress">
                <div className="determinate" style={{ width: "65%" }}></div>
              </div> */}
            </li>
            <li>
              <h5>Javascript</h5>
              <div>Frameworks and Libraries:</div>
              <div>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Passport</p>
                <p>jQuery</p>
              </div>
              {/* <div className="progress">
                <div className="determinate" style={{ width: "75%" }}></div>
              </div> */}
            </li>
            <li>
              <h5>HTML, CSS & SaaS</h5>
              {/* <div className="progress">
                <div className="determinate" style={{ width: "80%" }}></div>
              </div> */}
            </li>
            <li>
              <h5>Databases/Tools</h5>
              <div>
                <p>MongoDB</p>
                <p>SQL (Postgres, PL/SQL)</p>
                <p>Agile Development</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
