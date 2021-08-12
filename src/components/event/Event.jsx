import React, { useState } from "react";
import PropTypes from "prop-types";
import "./event.scss";

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
  const [eventStatus, setEventStatus] = useState(false);

  return (
    <>
      <div
        style={{ height, marginTop }}
        className="event"
        onClick={() => setEventStatus(!eventStatus)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {eventStatus && (
        <button className="delete-event-btn" onClick={() => deleteEvent(id)}>
          <i className="fas fa-trash"></i>
          Delete
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Event;
