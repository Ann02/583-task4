class MonthException {
  monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  name;
  message;

  constructor(name, message) {
    this.name = name;
    this.message = message;
  }
}

function showMonthName(month) {
  let mException = new MonthException(
    "MonthException",
    "Incorrect month number"
  );

  if (month < 1 || month > 12) {
    throw mException;
  } else {
    return mException.monthArray[month - 1];
  }
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (exception) {
  console.log(exception.name + " " + exception.message);
}
