import React, { useState } from "react";

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

export default Event;

// class Event extends React.Component {
//   state = {
//     isDeleteButton: false,
//     isEvent: true,
//   };

//   onChange = () => {
//     this.setState({
//       isDeleteButton: true,
//       isEvent: false,
//     });
//   };

//   render() {
//     console.log(this.props);

//     return (
//       <>
//         <div
//           style={{ height: this.props.height, marginTop: this.props.marginTop }}
//           className="event"
//           onClick={this.onChange}
//         >
//           <div className="event__title">{this.props.title}</div>
//           <div className="event__time">{this.props.time}</div>
//         </div>
//         {this.state.isDeleteButton && (
//           <button
//             className="delete-event-btn"
//             onClick={() => this.props.deleteEvent(this.props.id)}
//           >
//             <i className="fas fa-trash"></i>
//             Delete
//           </button>
//         )}
//       </>
//     );
//   }
// }

// export default Event;
