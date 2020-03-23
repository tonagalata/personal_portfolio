import React from "react";
import { ReactComponent as Heart } from "../../images/heart.svg";
import styles from "./Footer.module.css";

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          Galata Tona &copy; inspired by: the static site {" "}
          <small className={styles.copyright}>
            Designed with <Heart /> by{" "}
            <a
              href="https://themes.3rdwavemedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xiaoying Riley
            </a>{" "}
            for developers
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
