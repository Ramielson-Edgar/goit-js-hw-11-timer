function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimerComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function formartDate(time) {
  return getTimerComponents(time);
}

export default formartDate;
