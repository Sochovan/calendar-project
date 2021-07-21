import React from "react";
import moment from "moment";
import { months } from "../../utils/dateUtils.js";
import "./header.scss";

const Header = ({
  goPrevWeek,
  goNextWeek,
  goToday,
  weekStartDate,
  weekDates,
}) => {
  const isNextMonth = false;
  console.log(weekDates); //26.07-01.08
  for (let i = 0; i < weekDates.length; i++) {
    console.log(new Date(weekDates[1]).getMonth()); //6
    console.log(new Date(weekDates[6]).getMonth()); //7
    if (
      new Date(weekDates[1]).getMonth() !== new Date(weekDates[6]).getMonth()
    ) {
      return isNextMonth;
    }
    console.log(isNextMonth);
  }

  const currentMonth = moment(new Date(weekStartDate)).format("MMM");
  console.log(currentMonth);

  const nextMonth = `${moment(new Date(weekStartDate)).format("MMM")}-${moment(
    new Date(weekStartDate.setMonth(weekStartDate.getMonth() + 1)).format("MMM")
  )}`;
  console.log(nextMonth);

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>

      <div className="navigation">
        <button className="navigation__today-btn button" onClick={goToday}>
          Today
        </button>

        <button
          className="icon-button navigation__nav-icon"
          onClick={goPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="icon-button navigation__nav-icon"
          onClick={goNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <span className="navigation__displayed-month">
          {isNextMonth ? "123" : "456"}
        </span>
      </div>
    </header>
  );
};

export default Header;
