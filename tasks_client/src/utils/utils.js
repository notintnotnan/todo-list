function datetimeString(date) {
  date = new Date(date);
  const stringBuilt = `${date.getFullYear()}-${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }-${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}T${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }-05:00`;
  console.log();
  return stringBuilt;
}

const doneDateTransform = (dtFormString) => {
  return dtFormString ? String(dtFormString) + ":00-05:00" : "";
};

export { datetimeString, doneDateTransform };
