import React from "react";

interface interfaceStartButton {
  start: Function;
}

export default function StartButton(props: interfaceStartButton): JSX.Element {
  return (
    <>
      <button onClick={() => props.start()}>start</button>
    </>
  );
}
