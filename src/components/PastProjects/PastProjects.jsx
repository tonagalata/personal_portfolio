import React from "react";
import { ReactComponent as FindOutMore }from "../../images/findout.svg";
import styles from "./PastProjects.module.css";

const PastProjects = (props) => {
  return (
    <>
      <div className={props.bgColor ? styles.bgChange : styles.contentSBS}>
        <img src='https://github.com/tonagalata/coingo.app/blob/development/public/images/screenshots/Screen%20Shot1.png?raw=true' alt="project" />
        <div className={styles.contentSBSDesc}>
          <h3 className={styles.contentTitle}>CoinGo</h3>
          <p className={styles.contentDesc}>
          Social Group Funding Application
          </p>
          <p>
          Come together with your friends and/or family to save up money towards a common goal. If you have trouble saving money, let help you by incorprating a group mentality to saving.
          </p>
          <a
            href="https://coingo.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBtn}
          >
            <FindOutMore/> Launch Project
          </a>
        </div>
      </div>
      <hr/>
      <div className={props.bgColor ? styles.bgChange : styles.contentSBS}>
        <img src='https://github.com/tonagalata/tonagalata.github.io/blob/master/assets/screenshot1.png?raw=true'alt="project" />
        <div className={styles.contentSBSDesc}>
          <h3 className={styles.contentTitle}>Dayli Hlth</h3>
          <p className={styles.contentDesc}>
          Keep track of your daily health goals. Manage Your Health. Manage Your Life. 
          </p>
          <p>
          A clean daily calorie counting app that allows users to add food entries from the Nutritionix API and then add the items to their local account. Users can create local account and update and clear their data. Get started with <a href='https://tonagalata.github.io/' target="_blank" rel="noopener noreferrer">Dayli Hlth</a>
          </p>
          <a
            href="https://tonagalata.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectBtn}
          >
            <FindOutMore/> Launch Project
          </a>
        </div>
      </div>
    </>
  );
};

export default PastProjects;
