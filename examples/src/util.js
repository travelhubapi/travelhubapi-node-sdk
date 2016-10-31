function formatDate(date) {
  const d = new Date(date);
  const monthDiff = 1;
  let month = `${(d.getMonth() + monthDiff)}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();
  const twoDigits = 2;
  const dateArray = [];

  if (month.length < twoDigits) {
    month = `0${month}`;
  }

  if (day.length < twoDigits) {
    day = `0${day}`;
  }

  dateArray[0] = year;
  dateArray[1] = month;
  dateArray[2] = day;

  return dateArray.join('-');
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

exports.formatDate = formatDate;
exports.addDays = addDays;
