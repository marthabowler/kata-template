function humanReadable(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const remainder = seconds / 3600 - hours;
  const minutes = Math.floor(remainder * 60);
  const minremainder = remainder * 60 - minutes;
  const newSeconds = Math.round(minremainder * 60);

  function appendZero(value: number): string {
    if (value < 10) return `0${value}`;
    else {
      return `${value}`;
    }
  }

  return appendZero(hours).concat(
    ":",
    appendZero(minutes),
    ":",
    appendZero(newSeconds),
  );
}

export default humanReadable;
