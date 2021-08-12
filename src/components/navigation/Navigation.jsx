import React from "react";
import PropTypes from "prop-types";
import { days } from "../../utils/dateUtils.js";
import moment from "moment";
import classNames from "classnames";

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map((dayDate) => {
      const isToday =
        moment(new Date()).format("MMMM DD YYYY") ===
        moment(dayDate).format("MMMM DD YYYY");

      const dayNameClasses = classNames("day-label__day-name", {
        "current-name": isToday,
      });
      const dayNumberClasses = classNames("day-label__day-number", {
        "current-number": isToday,
      });
      return (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <span className={dayNameClasses}>{days[dayDate.getDay()]}</span>
          <span className={dayNumberClasses}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
