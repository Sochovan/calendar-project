import React, { Component } from "react";
import moment from "moment";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(2021,6,27),
  };

  goNextWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() + 7)
      ),
    });
  };

  goPrevWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
      ),
    });
  };

  goToday = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          goPrevWeek={this.goPrevWeek}
          goNextWeek={this.goNextWeek}
          goToday={this.goToday}
          weekStartDate={this.state.weekStartDate}
          getMonth={this.getMonth}
          weekDates={weekDates}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
