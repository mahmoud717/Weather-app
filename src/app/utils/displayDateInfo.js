export default () => {
  // getting and displaying the day
  const date = new Date();
  const dateDiv = document.querySelector('.date');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  let dayTag = 'st';
  if ([1, 21, 31].includes(date.getDate())) {
    dayTag = 'st';
  } else if ([2, 22].includes(date.getDate())) {
    dayTag = 'nd';
  } else if ([3, 23].includes(date.getDate())) {
    dayTag = 'rd';
  } else {
    dayTag = 'th';
  }
  dateDiv.innerHTML = `${days[date.getDay()]}, ${date.getDate()}${dayTag} ${month[date.getMonth()]} `;
  const dateDayDiv = document.querySelector('.date-day');
  dateDayDiv.innerHTML = days[date.getDay()];
  // getting and displaying the time time
  const time = document.querySelector('.time');

  let timeFormat = 'am';
  let hoursFormat = date.getHours();
  if (hoursFormat > 12) {
    hoursFormat -= 12;
    timeFormat = 'pm';
  }
  let minutesZero = 0;
  if (date.getMinutes() >= 10) {
    minutesZero = '';
  }

  let hoursZero = 0;
  if (hoursFormat >= 10) {
    hoursZero = '';
  }
  time.innerHTML = `${hoursZero}${hoursFormat}:${minutesZero}${date.getMinutes()}${timeFormat} `;
};