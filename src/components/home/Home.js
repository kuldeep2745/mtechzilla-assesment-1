import Styles from "./Home.module.css"
import React, { useEffect, useState } from "react";


export default function App() {
  const [secondsLeft, setSecondsLeft] = useState( 25*60);
  const [timer, setTimer] = useState();

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className={Styles.back}>
      <h1 className={Styles.heading}>Pomodoro Timer</h1>
      <button className={Styles.button} onClick={start}>start</button>
      <div className={Styles.seconds}>{secondsLeft} seconds left</div>
    </div>
  );
}