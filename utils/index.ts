export const combineDateTime = (date: string, time: string) => {
  const DateN = new Date(date);
  const TimeN = new Date(time);
  const datestringFromDP = `${DateN.getFullYear()}-${
    DateN.getMonth() + 1
  }-${DateN.getDate()}`;
  console.log(datestringFromDP);
  var timeString = TimeN.getHours() + ":" + TimeN.getMinutes() + ":00";
  var dateObj = new Date(datestringFromDP + " " + timeString);
  return dateObj.toISOString();
};
