import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./modal.scss";
import { getDateTime } from "../../utils/dateUtils";

const Modal = ({ onDeleteModal, createEvent }) => {
  const [eventData, setEvent] = useState({
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    startTime: moment(new Date()).format("HH:mm"),
    endTime: moment(new Date()).format("HH:mm"),
    description: "",
  });

  const { title, description, date, startTime, endTime } = eventData;
  const handleChangeInputInModal = (e) => {
    const { name, value } = e.target;

    setEvent({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();

    const currentEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    createEvent(currentEvent);

    setEvent({
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
    });
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onDeleteModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmitModal}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChangeInputInModal}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChangeInputInModal}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChangeInputInModal}
                value={startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChangeInputInModal}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChangeInputInModal}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onDeleteModal: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
};

export default Modal;
