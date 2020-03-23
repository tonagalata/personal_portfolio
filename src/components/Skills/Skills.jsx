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
              <h5>Python & Django</h5>
              <span className={styles.tooltip2}>
              Intermediate
              </span>
              <div className="progress">
                <div className="determinate" style={{ width: "65%" }}></div>
              </div>
            </li>
            <li>
              <h5>Javascript & jQuery</h5>
              <span>
              Intermediate
              </span>
              <div className="progress">
                <div className="determinate" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li>
              <h5>HTML, CSS & SaaS</h5>
              <span>
              Intermediate
              </span>
              <div className="progress">
                <div className="determinate" style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
