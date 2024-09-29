import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  // let time = new Date();
  useEffect(() => {
    console.log("set the interval");
    const intervalId = setInterval(() => {
      return setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);
  return (
    <p className="fs-3">
      This is the current time{time.toDateString()}-{time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
