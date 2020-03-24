import React from "react";
import GitHubCalendar from "github-calendar";
// import GitHubFeed from 'react-github-activity'
import styles from "./GitHubReactCalendar.module.css";

class GitHubReactCalendar extends React.Component {
  state = {
    gitHubCalendar: [],
    events: []
  };

  componentDidMount = async () => {
    const url = "https://api.github.com/users/tonagalata/events";
    const tonaEnvents = await fetch(url).then(res => res.json());
    await this.setState({
      events: tonaEnvents
    });
    await GitHubCalendar("#github-graph", "tonagalata", {responsive: true});
  };

  render() {
    return (
      <>
        <div className={styles.innerSection}>
          <h2>GitHub</h2>
          <section className="github section">
            <div className="section-inner">
              <div id="github-graph" className="github-graph">
              </div>
              <div className={styles.GitHubFeed}>
              {/* <GitHubFeed
                className={styles.feed}
                fullName="Galata Tona" 
                userName="tonagalata" 
                avatarUrl='https://avatars0.githubusercontent.com/u/28738877?v=4' 
                profileUrl="https://www.github.com/tonagalata" 
                events={this.state.events} 
              /> */}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default GitHubReactCalendar;
