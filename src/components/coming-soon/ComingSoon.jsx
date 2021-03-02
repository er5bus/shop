import React, { Component } from 'react';
import {toAbsoluteUrl} from '../../utils';
import { FormattedMessage } from 'react-intl'

class ComingSoon extends Component {

  constructor(props){
    super(props)
    this.state = this.calculateTime()
  }

  calculateTime = () => {
    let endTime = new Date("August 23, 2021 17:00:00 PDT");
    let endTimeParse = (Date.parse(endTime)) / 1000;
    let now = new Date();
    let nowParse = (Date.parse(now) / 1000);
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    return { days, hours, minutes, seconds }
  }

  commingSoonTime = () => {
    this.setState(this.calculateTime());
  }

  componentDidMount(){
    this.myInterval = setInterval(() => {
      this.commingSoonTime();
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="coming-soon-area" style={{ backgroundImage: `url(${toAbsoluteUrl("/media/images/coming-soon-bg.jpg")})` }}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="coming-soon-content">
                <img src={toAbsoluteUrl("/media/images/logo.png")} alt="..." />

                <h2><FormattedMessage id="COMING_SOON.TITLE" /></h2>

                <div id="timer" className="flex-wrap d-flex justify-content-center">
                  <div id="days" className="align-items-center flex-column d-flex justify-content-center">
                    {this.state.days} <span><FormattedMessage id="COMING_SOON.DAYS" /></span>
                  </div>
                  <div id="hours" className="align-items-center flex-column d-flex justify-content-center">
                    {this.state.hours} <span><FormattedMessage id="COMING_SOON.HOURS" /></span>
                  </div>
                  <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">
                    {this.state.minutes} <span><FormattedMessage id="COMING_SOON.MINUTES" /></span>
                  </div>
                  <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">
                    {this.state.seconds} <span><FormattedMessage id="COMING_SOON.SECONDS" /></span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComingSoon;
