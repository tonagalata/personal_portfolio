import React from "react";
import PastProjects from "../PastProjects/PastProjects";
import styles from "./LatestProject.module.css";

class LatestProject extends React.Component {
  state = {
    repo: [],
    readMe: []
  };
  componentDidMount = async () => {
    const url = "https://api.github.com/repos/tonagalata/trimer";
    const url2 =
      "https://api.github.com/repos/tonagalata/trimer/git/blobs/694433a63487014a9f261c2fc8da777ecb2a3262";
    const readMe = await fetch(url2).then(res => res.json());
    await this.setState({
      readMe: readMe
    });
    const repo = await fetch(url).then(res => res.json());
    await this.setState({
      repo: repo
    });
    // await console.log(this.state.repo);
    // await console.log(this.state.readMe);
  };

  render() {
    return (
      <>
        <div className={styles.innerSection}>
          <h2>Latest Projects</h2>
          <div className={styles.content}>
            <h3 className={styles.contentTitle}>{this.state.repo.name}</h3>
            <p className={styles.contentDesc}>{this.state.repo.description}</p>
            <img src='https://github.com/tonagalata/trimer/blob/master/src/Images/screenshots/screenshot0.png?raw=true' alt="project" style={{}}/>
            <p>
              Looking for a Barbershop, Salon or Spa is difficult, even more
              trying to get the stylist's availability for the day or even the
              week is difficult. That is where Trimer comes in to save the day.
              With Trimer you can browser through our partnering business to
              check their location, see review from actual customers and even
              schedule an appointment from a specific stylist.
            </p>
            <a
              href="https://trimer-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectBtn} waves-effect waves-light btn`}
            >
              <i className="material-icons left">cloud</i>Go To Project
            </a>
          </div>
          <hr />
          <PastProjects />
        </div>
      </>
    );
  }
}

export default LatestProject;