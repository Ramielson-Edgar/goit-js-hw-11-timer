import formartDate from '../js/format';

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    this.refs = {
      $days: document.querySelector(`${selector} [data-value="days"]`),
      $hours: document.querySelector(`${selector} [data-value="hours"]`),
      $mins: document.querySelector(`${selector} [data-value="mins"]`),
      $secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
  }

  start() {
    setInterval(() => {
      const curretnTime = Date.now();
      const deltaTime = this.targetDate - curretnTime;
      const time = formartDate(deltaTime);
      this.updateTimerface(time);
    }, 1000);
  }

  updateTimerface({ days, hours, mins, secs }) {
    const { $days, $hours, $mins, $secs } = this.refs;
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $mins.innerHTML = mins;
    $secs.innerHTML = secs;
  }
}
