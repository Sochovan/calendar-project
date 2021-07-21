import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isVisible: false,
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

  onChangeVisibleModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  onDeleteModal = () => {
    this.setState({
      isVisible: false,
    });
  };

  createEvent = (eventData) => {
    console.dir(eventData);
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        {!this.state.isVisible ? null : (
          <Modal
            onDeleteModal={this.onDeleteModal}
            weekStartDate={this.state.weekStartDate}
            onSubmit={this.createEvent}
          />
        )}
        <Header
          goPrevWeek={this.goPrevWeek}
          goNextWeek={this.goNextWeek}
          goToday={this.goToday}
          weekStartDate={this.state.weekStartDate}
          getMonth={this.getMonth}
          weekDates={weekDates}
          onChangeVisibleModal={this.onChangeVisibleModal}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
