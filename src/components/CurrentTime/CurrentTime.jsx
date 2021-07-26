import React, { useEffect, useState } from "react";
import "./currentTime.scss";

const CurrentTime = () => {
  const [redLine, setRedLine] = useState(new Date().getMinutes());

  const style = {
    top: redLine,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRedLine(new Date().getMinutes());
    }, 1000 * 60);

    return () => {
      clearInterval(intervalId);
    };
  }, [redLine]);

  return <div className="red-line" style={style}></div>;
};

export default CurrentTime;

// class CurrentTime extends React.Component {
//   state = {
//     redLine: new Date().getMinutes(),
//   };

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ redLine: new Date().getMinutes() });
//     }, 1000 * 60);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     const style = {
//       top: this.state.redLine,
//     };

//     return <div className="red-line" style={style}></div>;
//   }
// }

// export default CurrentTime;
