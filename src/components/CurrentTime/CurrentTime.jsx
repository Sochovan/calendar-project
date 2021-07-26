import React from "react";
import "./currentTime.scss";

class CurrentTime extends React.Component {
  state = {
    redLine: new Date().getMinutes(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ redLine: new Date().getMinutes() });
    }, 1000 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const style = {
      top: this.state.redLine,
    };

    return <div className="red-line" style={style}></div>;
  }
}

export default CurrentTime;
