import React, { useState, useEffect, useRef } from "react";

const Timer = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  let interval = useRef();

  const startTimer = () => {
    const CountDown = new Date('Jun 01 2021 00:00:00').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountDown - now;
      const days = Math.floor(distance/(1000*60*60*24));
      const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60))/1000);

      if(distance > 0) {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      } else{
        clearInterval(interval.current)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <div className="clock">
      <div className="cd">
        <section>
          <h1>
            {timerDays}
          </h1>
          <span><small>Days</small></span>
        </section>
        <section>
          <h1>
            {timerHours}
          </h1>
          <span><small>Hours</small></span>
        </section>
        <section>
          <h1>
            {timerMinutes}
          </h1>
          <span><small>Minutes</small></span>
        </section>
        <section>
          <h1>
            {timerSeconds}
          </h1>
          <span><small>Seconds</small></span>
        </section>
      </div>
    </div>
  );
};


export default Timer;
