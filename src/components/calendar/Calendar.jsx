import React, { Component } from "react";

import Navigation from "./../navigation/Navigation.jsx";
import Week from "../week/Week.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import events from "../../gateway/events";

import "./calendar.scss";

class Calendar extends Component {
  state = {
    events,
  };

  render() {
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={this.state.events} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
