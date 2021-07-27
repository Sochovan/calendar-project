import React from "react";
import moment from "moment";
import "./header.scss";
import PropTypes from "prop-types";

const Header = ({
  goPrevWeek,
  goNextWeek,
  goToday,
  weekDates,
  onChangeVisibleModal,
}) => {
  const firstDayOfWeek = moment(weekDates[0]).format("MMM");
  const lastDayOfWeek = moment(weekDates[6]).format("MMM");

  const month =
    firstDayOfWeek === lastDayOfWeek
      ? firstDayOfWeek
      : `${firstDayOfWeek}-${lastDayOfWeek}`;

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={onChangeVisibleModal}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>
        Create
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

        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

Header.PropTypes = {
  goPrevWeek: PropTypes.func.isRequired,
  goNextWeek: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  onChangeVisibleModal: PropTypes.func.isRequired,
};

export default Header;
