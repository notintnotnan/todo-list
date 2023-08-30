function datetimeString(date) {
  date = new Date(date - 3600 * 6000);
  const stringBuilt = `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }-${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}T${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }-05:00`;
  return stringBuilt;
}

export { datetimeString };
