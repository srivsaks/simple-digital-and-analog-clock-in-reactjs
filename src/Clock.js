import React, { useEffect, useState } from "react";

const Clock = ({ title }) => {
  const [time, setTime] = useState({ sec: 0, hour: 0, min: 0 });
  const [timerId, setTimerId] = useState();

  function displayTime() {
    const date = new Date();

    setTime({
      sec: date.getSeconds() * 6,
      hour: date.getHours() * 30,
      min: 6 * date.getMinutes()
    });
  }
  useEffect(() => {
    const id = setInterval(displayTime, 1000);
    //setTimerId(id);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div>
      <div className="analog-clock">
        <div
          className="sec"
          style={{ transform: `rotate(${time.sec}deg)` }}
        ></div>
        <div
          className="hour"
          style={{ transform: `rotate(${time.hour}deg)` }}
        ></div>
        <div
          className="min"
          style={{ transform: `rotate(${time.min}deg)` }}
        ></div>
      </div>
      <div className="digital-clock">
        <span>{time.hour / 30}:</span>
        <span>{time.min / 6 <= 9 ? <>0{time.min / 6}</> : time.min / 6}:</span>
        <span>{time.sec / 6 <= 9 ? <>0{time.sec / 6}</> : time.sec / 6}</span>
      </div>
    </div>
  );
};
export default Clock;
