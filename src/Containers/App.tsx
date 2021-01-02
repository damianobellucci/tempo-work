import React from "react";
import Countdown from "../Components/Countdown";
import TimeSetter from "../Components/TimeSetter";
import ShowTime from "../Components/ShowTime";
import StartButton from "../Components/StartButton";
import StopButton from "../Components/StopButton";

import * as TimePreset from "../Utils/TimePresets";

import { useState } from "react";

function App() {
  const [time, setTime]: [number, Function] = useState(TimePreset.defaultTime);
  const [started, setStarted]: [boolean, Function] = useState(false);

  return (
    <div className="App">
      {!started && (
        <>
          <ShowTime time={time} text="minutes"></ShowTime>
          <TimeSetter
            addMinute={() => setTime(time + TimePreset.oneMinute)}
            removeMinute={() =>
              time >= 2 && setTime(time - TimePreset.oneMinute)
            }
          ></TimeSetter>
          <StartButton
            start={() => {
              setStarted(true);
            }}
          ></StartButton>
        </>
      )}
      {started && (
        <>
          <Countdown time={time}></Countdown>
          <StopButton
            stop={() => {
              setStarted(false);
            }}
          ></StopButton>
        </>
      )}
    </div>
  );
}

export default App;
