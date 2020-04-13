import React from "react";
import { ReactComponent as Cap } from "../../images/grad_cap.svg";
import styles from "./Education.module.css";

const Education = props => {
  return (
    <div className={props.bgColor ? styles.bgChange : styles.innerSection}>
      <h2>Education</h2>
      <div className={styles.eduSection}>
        <span>
          <Cap />
        </span>
        <h5>Software Development</h5>
      </div>
      <h4>
        General Assembly <span>(2019-2020)</span>
      </h4>
      <div className={styles.eduSection}>
        <span>
          <Cap />
        </span>
        <h5>MA International Development</h5>
      </div>
      <h4>
        University of Pittsburgh <span>(2012-2014)</span>
      </h4>
    </div>
  );
};

export default Education;
