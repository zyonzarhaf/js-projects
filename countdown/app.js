const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.getElementById('deadline');
const countdown = document.querySelector('.countdown');
const countdownValuesDOM = document.querySelectorAll('.countdown-value');

// Get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

// Set futureDate to 10 days from now
const futureDate = new Date(currentYear, currentMonth, currentDay + 10, 17, 30, 0);

// Format date values
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Date values in milliseconds
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const futureDateMs = futureDate.getTime();

// Set deadline
deadline.dateTime = `${year}-${futureDate.getMonth()}-${futureDate.getDate()} ${hours}:${minutes}`;

deadline.textContent = `${weekday}, ${futureDate.getDate()} ${month} ${year}, ${hours}:${minutes}`;

// Calculate remaining time and set countdown
const getRemainingTime = function () {
  const today = new Date().getTime();
  const remainingTime = futureDateMs - today;
  let days = Math.floor(remainingTime / oneDay);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);

  // Create values array
  const countdownValues = [days, hours, minutes, seconds];

  // Set values to their respective DOM element
  countdownValuesDOM.forEach(function (valueDOM, index) {
    valueDOM.textContent = formatValues(countdownValues[index]);
  });

  function formatValues(countdownValue) {
    const formattedValues = {
      true: `0${countdownValue}`,
      false: countdownValue,
    };

    return formattedValues[countdownValue < 10];
  }

  return remainingTime;
};

let intervalId = setInterval(() => {
  let remainingTime = getRemainingTime();
  if (remainingTime < 0) {
    clearInterval(intervalId);
    countdown.innerHTML = `<h5 class="expired">Sorry, the giveaway has expired.</h5>`;
  }
}, 1000);
