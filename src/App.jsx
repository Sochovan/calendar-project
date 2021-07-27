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

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//     isVisible: false,
//   };

//   goNextWeek = () => {
//     this.setState({
//       weekStartDate: new Date(
//         this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() + 7)
//       ),
//     });
//   };

//   goPrevWeek = () => {
//     this.setState({
//       weekStartDate: new Date(
//         this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
//       ),
//     });
//   };

//   goToday = () => {
//     this.setState({
//       weekStartDate: new Date(),
//     });
//   };

//   onChangeVisibleModal = () => {
//     console.log(123);
//     this.setState({
//       isVisible: true,
//     });
//   };

//   onDeleteModal = () => {
//     this.setState({
//       isVisible: false,
//     });
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header
//           goPrevWeek={this.goPrevWeek}
//           goNextWeek={this.goNextWeek}
//           goToday={this.goToday}
//           weekStartDate={this.state.weekStartDate}
//           getMonth={this.getMonth}
//           weekDates={weekDates}
//           onChangeVisibleModal={this.onChangeVisibleModal}
//         />
//         <Calendar
//           weekDates={weekDates}
//           onDeleteModal={this.onDeleteModal}
//           weekStartDate={this.state.weekStartDate}
//           onChangeVisibleModal={this.onChangeVisibleModal}
//           isVisible={this.state.isVisible}
//         />
//       </>
//     );
//   }
// }

// export default App;
