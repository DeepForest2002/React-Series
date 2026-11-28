import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (show === false) return;
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [show]);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show ? <h1>Time is: {time}</h1> : ""}
    </>
  );
}
