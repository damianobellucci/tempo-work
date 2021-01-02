import React from "react";
import Countdown from "../Components/Countdown";
import TimeSetter from "../Components/TimeSetter";
import ShowTime from "../Components/ShowTime";
import StartButton from "../Components/StartButton";
import StopButton from "../Components/StopButton";

import * as TimePreset from "../Utils/TimePresets";

import { useState } from "react";

const styleApp: React.CSSProperties = {
  margin: "20%",
};

const styleCountDownModule: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  margin: "10%",
  flexDirection: "column",
};

function App() {
  const [time, setTime]: [number, Function] = useState(TimePreset.defaultTime);
  const [started, setStarted]: [boolean, Function] = useState(false);

  return (
    <div className="App" style={styleApp}>
      {!started && (
        <div style={styleCountDownModule}>
          <ShowTime time={time} text="minutes"></ShowTime>
          <TimeSetter
            addMinute={() => setTime(time + TimePreset.oneMinute)}
            removeMinute={() =>
              time > TimePreset.oneMinute &&
              setTime(time - TimePreset.oneMinute)
            }
          ></TimeSetter>
          <StartButton
            start={() => {
              setStarted(true);
            }}
          ></StartButton>
        </div>
      )}
      {started && (
        <>
          <div style={styleCountDownModule}>
            <Countdown time={time}></Countdown>
            <StopButton
              stop={() => {
                setStarted(false);
              }}
            ></StopButton>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
