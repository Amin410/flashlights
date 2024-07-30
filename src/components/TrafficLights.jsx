import React, { useEffect, useState } from "react";
import LightOne from "../components/Lights/LightOne";
import { LightTwo } from "../components/Lights/LightTwo";
import LightThree from "../components/Lights/LightThree";
import LightFour from "../components/Lights/LightFour";

const TrafficLights = () => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prevCycle) => (prevCycle + 1) % 4);
    }, 1000); // Change every 5 seconds for demonstration

    return () => clearInterval(interval);
  }, []);

  const lightStates = {
    top: cycle === 0 ? "green" : "red",
    right: cycle === 1 ? "green" : "red",
    bottom: cycle === 2 ? "red" : "green",
    left: cycle === 3 ? "red" : "green",
  };
  return (
    <main className="relative w-96 h-112">
      <div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <LightOne activeLight={lightStates.top} />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <LightTwo activeLight={lightStates.right} />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <LightThree activeLight={lightStates.bottom} />
        </div>
        <div className="absolute  left-0 top-1/2 transform -translate-y-1/2">
          <LightFour activeLight={lightStates.left} />
        </div>
      </div>
    </main>
  );
};

export default TrafficLights;
