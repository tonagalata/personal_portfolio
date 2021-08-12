import React from "react";
import avatar from "../../images/avatar2.png";
import styles from "./Header.module.css";
import { ReactComponent as FindOutMore }from "../../images/findout.svg";
import { ReactComponent as Twitter } from "../../images/socail/twitter2.svg";
import { ReactComponent as Github } from "../../images/socail/github.svg";
import { ReactComponent as Linkedin } from "../../images/socail/linkedin.svg";
import { ReactComponent as Stackoverflow } from "../../images/socail/stackoverflow.svg";
import { ReactComponent as PaperPlane } from "../../images/socail/paper-plane.svg";

const Header = (props) => {

    return ( 
    <div className={props.bgColor ? styles.bgChange : styles.header}>
      <div className={styles.container}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <div className={styles.profileContent}>
          <h1>Galata Tona</h1>
          <h2>Software Engineer</h2>
          <h3>Washington DC Metro</h3>
          <ul className={props.bgColor ? styles.bgColorSVG : styles.listInline}>
            <li className={styles.listItem}>
              <a href="https://twitter.com/galata_tona" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="https://github.com/tonagalata" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="https://www.linkedin.com/in/tona" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="https://stackoverflow.com/users/12381718/oromodev" target="_blank" rel="noopener noreferrer">
                <Stackoverflow />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.switchContainer}>
          <a
            style={{ display: "flex", alignItems: "center", height: '3rem', fontWeight: 800 }}
            className="contact btn"
            href="mailto:tonagalata@gmail.com"
            >
            <PaperPlane style={{ height: 20, marginRight: '.5rem' }} />
            Contact
          </a>
          <div className="switch">
                <button 
                className={props.bgColor ? `btn grey lighten-5 black-text` : `btn black`} 
                onClick={props.handleColorChange}>
                  {props.bgColor ? `Light Mode` : `Dark Mode`}
                  </button>

          </div>
          <div className={styles.lastButton}>
          <a href="/Galata Tona Resume_.pdf" download>
            <button className={props.bgColor ? `btn blue white-text` : `btn white black-text`}
            >Resume<FindOutMore className={styles.FindOutMore} /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
     );
  }
 
export default Header;
