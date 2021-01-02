import React from "react";

interface interfaceShowTime {
  time: number;
}

export default function ShowTime(props: interfaceShowTime): JSX.Element {
  return <>{props.time / 60 / 1000}</>;
}
