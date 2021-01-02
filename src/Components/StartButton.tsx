import React from "react";

interface interfaceStartButton {
  stop: Function;
}

export default function StartButton(props: interfaceStartButton): JSX.Element {
  return (
    <>
      <button onClick={() => props.stop()}>start</button>
    </>
  );
}
