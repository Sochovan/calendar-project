import React from "react";

import "./event.scss";

class Event extends React.Component {
  state = {
    isDeleteButton: false,
    isEvent: true,
  };

  onChange = () => {
    this.setState({
      isDeleteButton: true,
      isEvent: false,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div
          style={{ height: this.props.height, marginTop: this.props.marginTop }}
          className="event"
          onClick={this.onChange}
        >
          <div className="event__title">{this.props.title}</div>
          <div className="event__time">{this.props.time}</div>
        </div>
        {this.state.isDeleteButton && (
          <button
            className="delete-event-btn"
            onClick={() => this.props.deleteEvent(this.props.id)}
          >
            <i className="fas fa-trash"></i>
            Delete
          </button>
        )}
      </>
    );
  }
}

export default Event;


