import Countdown from "react-countdown";

interface interfacePropsCountdown {
  time: number;
}

export default function CountdownComponent(
  props: interfacePropsCountdown
): JSX.Element {
  return <Countdown date={Date.now() + props.time}></Countdown>;
}
