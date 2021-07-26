import React from "react";

import Event from "../event/Event.jsx";
import { formatMins } from "../../utils/dateUtils.js";
import CurrentTime from "../CurrentTime/CurrentTime.jsx";

const Hour = ({ dataHour, hourEvents, deleteEvent, isCurrentTimeSlot }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentTimeSlot && <CurrentTime />}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <>
            <Event
              key={id}
              id={id}
              height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
              marginTop={dateFrom.getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
              deleteEvent={deleteEvent}
            />
          </>
        );
      })}
    </div>
  );
};

export default Hour;
