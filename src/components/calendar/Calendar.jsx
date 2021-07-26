import React, { Component, useEffect, useState } from "react";

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

const Calendar = ({
  onDeleteModal,
  onChangeVisibleModal,
  weekDates,
  isVisibleModal,
}) => {
  const [eventsListData, setEventsListData] = useState([]);

  const upgradeEventData = (data) =>
    data.map((event) => ({
      ...event,
      dateFrom: new Date(event.dateFrom),
      dateTo: new Date(event.dateTo),
    }));

  const fetchEvents = () => {
    fetchEventsList()
      .then((events) => {
        setEventsListData(upgradeEventData(events));
      })
      .catch(() => alert("Internal Server Error. Can't display events"));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEvent = (eventData) => {
    onCreateEvent(eventData).then(() => fetchEvents());
  };

  const deleteEvent = (id) => {
    onDeleteEvent(id).then(() => fetchEvents());
  };

  return (
    <section className="calendar">
      {!isVisibleModal ? null : (
        <Modal
          onDeleteModal={onDeleteModal}
          // weekStartDate={weekStartDate}
          onChangeVisibleModal={onChangeVisibleModal}
          createEvent={createEvent}
        />
      )}

      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={eventsListData}
            deleteEvent={deleteEvent}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;

// class Calendar extends Component {
//   state = {
//     events: [],
//   };

//   fetchEvents = () => {
//     fetchEventsList()
//       .then((eventsList) =>
//         this.setState({
//           events: eventsList.map((event) => ({
//             ...event,
//             dateFrom: new Date(event.dateFrom),
//             dateTo: new Date(event.dateTo),
//           })),
//         })
//       )
//       .catch(() => alert("Internal Server Error. Can't display events"));
//   };

//   componentDidMount() {
//     this.fetchEvents();
//   }

//   createEvent = (eventData) => {
//     const { events } = this.state;

//     onCreateEvent(eventData).then(() => this.fetchEvents());
//   };

//   deleteEvent = (id) => {
//     onDeleteEvent(id).then(() => this.fetchEvents());
//   };

//   render() {
//     console.log(this.state);
//     const { weekDates } = this.props;

//     return (
//       <section className="calendar">
//         {!this.props.isVisible ? null : (
//           <Modal
//             onDeleteModal={this.props.onDeleteModal}
//             weekStartDate={this.state.weekStartDate}
//             onChangeVisibleModal={this.props.onChangeVisibleModal}
//             createEvent={this.createEvent}
//           />
//         )}

//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body">
//           <div className="calendar__week-container">
//             <Sidebar />
//             <Week
//               weekDates={weekDates}
//               events={this.state.events}
//               deleteEvent={this.deleteEvent}
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Calendar;
