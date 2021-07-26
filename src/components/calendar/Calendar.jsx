import React, { Component } from "react";

import Navigation from "../navigation/Navigation.jsx";
import Week from "../week/Week.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import Modal from "../modal/Modal.jsx";
import {
  onCreateEvent,
  fetchEventsList,
  onDeleteEvent,
} from "../../gateway/eventGateway.jsx";
import "./calendar.scss";

class Calendar extends Component {
  state = {
    events: [],
  };

  fetchEvents = () => {
    fetchEventsList()
      .then((eventsList) =>
        this.setState({
          events: eventsList.map((event) => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          })),
        })
      )
      .catch(() => alert("Internal Server Error. Can't display events"));
  };

  componentDidMount() {
    this.fetchEvents();
  }

  createEvent = (eventData) => {
    const { events } = this.state;

    onCreateEvent(eventData).then(() => this.fetchEvents());
  };

  deleteEvent = (eventId) => {
    // const updatedEvents = this.state.events.filter((event) => event.id !== id);
    // this.setState({ events: updatedEvents });

    onDeleteEvent(eventId).then(() => this.fetchEvents());
  };

  render() {
    console.log(this.state.events);
    const { weekDates } = this.props;

    return (
      <section className="calendar">
        {!this.props.isVisible ? null : (
          <Modal
            onDeleteModal={this.props.onDeleteModal}
            weekStartDate={this.state.weekStartDate}
            onChangeVisibleModal={this.props.onChangeVisibleModal}
            createEvent={this.createEvent}
          />
        )}

        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week
              weekDates={weekDates}
              events={this.state.events}
              deleteEvent={this.deleteEvent}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
