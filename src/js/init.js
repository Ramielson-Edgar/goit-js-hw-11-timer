import CountdownTimer from '../js/pluginTimer';

export default function init(selector, targetDate) {
  const timer = new CountdownTimer({ selector, targetDate });
  timer.start();
}
