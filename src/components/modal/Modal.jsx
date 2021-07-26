import React, { Component } from "react";
import moment from "moment";
import "./modal.scss";
import { getDateTime } from "../../utils/dateUtils";

class Modal extends Component {
  state = {
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    startTime: moment(new Date()).format("HH:mm"),
    endTime: moment(new Date()).format("HH:mm"),
    description: "",
  };

  handleChangeInputInModal = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmitModal = (e) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = this.state;
    const currentEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    this.props.createEvent(currentEvent);

    this.setState({
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.onDeleteModal}
            >
              +
            </button>
            <form className="event-form" onSubmit={this.handleSubmitModal}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.handleChangeInputInModal}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={this.state.date}
                  onChange={this.handleChangeInputInModal}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChangeInputInModal}
                  value={this.state.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.handleChangeInputInModal}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.handleChangeInputInModal}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
