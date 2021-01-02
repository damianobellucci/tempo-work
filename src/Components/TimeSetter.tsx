import React from "react";

interface interfaceTimeSetter {
  addMinute: Function;
  removeMinute: Function;
}

export default function TimeSetter(props: interfaceTimeSetter): JSX.Element {
  return (
    <div>
      <button onClick={() => props.addMinute()}>+</button>
      <button onClick={() => props.removeMinute()}>-</button>
    </div>
  );
}
