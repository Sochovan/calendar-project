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
