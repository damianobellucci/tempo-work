import React from "react";

interface interfaceStopButton {
  stop: Function;
}

export default function StartButton(props: interfaceStopButton): JSX.Element {
  return (
    <>
      <button onClick={() => props.stop()}>stop</button>
    </>
  );
}
