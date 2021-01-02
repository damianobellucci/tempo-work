import React from "react";

interface interfaceShowTime {
  time: number;
  text: string;
}

export default function ShowTime(props: interfaceShowTime): JSX.Element {
  return <>{props.time / 60 / 1000 + " " + props.text}</>;
}
