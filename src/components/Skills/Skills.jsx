import React from "react";
import styles from "./Skills.module.css";

const Skills = props => {
  return (
    <div className={props.bgColor ? styles.bgChange : styles.innerSection}>
      <h2>Skills</h2>
      <div className={styles.content}>
        <p>
          SMS/Mobile Payment Processing Artificial Intelligence and Machine
          Learning Language Translation Pathfinding/Mapping Software
        </p>
        <div className={styles.progressLevel}>
          <ul>
            <li>
              <h5>Python</h5>
              <div className={styles.frameworks}>Frameworks and Libraries:</div>
              <div>
                <ul>
                  <li>Django</li>
                  <li>NumPy</li>
                  <li>Pandas</li>
                  <li>Matplotlib</li>
                  <li>Scikit-Learn</li>
                </ul>
              </div>
              {/* <div className="progress">
                <div className="determinate" style={{ width: "65%" }}></div>
              </div> */}
            </li>
            <li>
              <h5>Javascript</h5>
              <div className={styles.frameworks}>Frameworks and Libraries:</div>
              <div>
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Passport</li>
                  <li>jQuery</li>
                </ul>
              </div>
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
                <ul>
                  <li>SQL (Postgres, PL/SQL)</li>
                  <li>MongoDB</li>
                  <li>Agile Development</li>
                  <li>Tableau</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
