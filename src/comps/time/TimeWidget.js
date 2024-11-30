"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./time.css"
export default function TimeWidget() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const lastRef = useRef(new Date(0));
  lastRef.current.setUTCHours(-1);

  const updateContainer = (newTime, prevTime) => {
    const timeArr = newTime.padStart(2, "0").split("");
    const prevArr = prevTime.padStart(2, "0").split("");
    return {
      firstDigit: timeArr[0] !== prevArr[0] ? timeArr[0] : null,
      secondDigit: timeArr[1] !== prevArr[1] ? timeArr[1] : null,
    };
  };

  const updateTime = () => {
    const now = new Date();

    const newTime = {
      hours: now.getHours().toString(),
      minutes: now.getMinutes().toString(),
      seconds: now.getSeconds().toString(),
    };

    const updates = {
      hours: updateContainer(newTime.hours, time.hours),
      minutes: updateContainer(newTime.minutes, time.minutes),
      seconds: updateContainer(newTime.seconds, time.seconds),
    };

    setTime(newTime);
    lastRef.current = now;

    return updates;
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  const renderDigits = (value) => {
    return (
      <>
        <div className={"first"}>
          <div>{value[0]}</div>
        </div>
        <div className={"second"}>
          <div>{value[1]}</div>
        </div>
      </>
    );
  };

  return (
    <div id="time-box">
      
    <div class="clock">
  <div class="hours">
      {renderDigits(time.hours)}
    {/* <div class="first">
      <div class="number">0</div>
      </div>
      <div class="second">
      <div class="number">0</div>
      </div> */}
  </div>
  <div class="tick">:</div>
  <div class="minutes">
      {renderDigits(time.minutes)}
    {/* <div class="first">
      <div class="number">0</div>
      </div>
      <div class="second">
      <div class="number">0</div>
    </div> */}
  </div>
  <div class="tick">:</div>
  <div class="seconds">
      {renderDigits(time.seconds)}
    {/* <div class="first">
      <div class="number">0</div>
    </div>
    <div class="second infinite">
      <div class="number">0</div>
    </div> */}
  </div>
</div>
</div>
  )
}
