import React, { Component, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "./utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const onDate = (day) =>
    new Date(weekStartDate.setDate(weekStartDate.getDate() + day));

  const goNextWeek = () => {
    setWeekStartDate(onDate(7));
  };

  const goPrevWeek = () => {
    setWeekStartDate(onDate(-7));
  };

  const goToday = () => {
    setWeekStartDate(new Date());
  };

  const onChangeVisibleModal = () => {
    setIsVisibleModal(true);
  };

  const onDeleteModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <>
      <Header
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        goToday={goToday}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
        onChangeVisibleModal={onChangeVisibleModal}
      />
      <Calendar
        weekDates={weekDates}
        onDeleteModal={onDeleteModal}
        weekStartDate={weekStartDate}
        onChangeVisibleModal={onChangeVisibleModal}
        isVisibleModal={isVisibleModal}
      />
    </>
  );
};

export default App;
