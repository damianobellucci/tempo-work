import React from "react";
import Countdown from "../Components/Countdown";
import TimeSetter from "../Components/TimeSetter";
import ShowTime from "../Components/ShowTime";
import StartButton from "../Components/StartButton";

import * as TimePreset from "../Utils/TimePresets";

import { useState } from "react";

function App() {
  const [time, setTime]: [number, Function] = useState(TimePreset.defaultTime);
  const [started, setStarted]: [boolean, Function] = useState(false);

  return (
    <div className="App">
      <ShowTime time={time}></ShowTime>
      <TimeSetter
        addMinute={() => setTime(time + TimePreset.oneMinute)}
        removeMinute={() => time >= 2 && setTime(time - TimePreset.oneMinute)}
      ></TimeSetter>
      {started && <Countdown time={time}></Countdown>}
      {!started && (
        <StartButton
          stop={() => {
            setStarted(true);
          }}
        ></StartButton>
      )}
    </div>
  );
}

export default App;
