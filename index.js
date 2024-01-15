const refs = {
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#sec'),
};

const timerId = setInterval(() => {
  const currentTime = new Date();

  const targetTime = new Date(`December 31, 2024 23:59:59`);

  const milisec = targetTime - currentTime;
  const convertTime = convertMs(milisec);
  const { days, hours, minutes, seconds } = convertTime;
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;

  if (convertTime.minutes === '00' && convertTime.seconds === '00') {
    clearInterval(timerId);
  }
}, 1000);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
}

// One more method
const timeCurrent = new Date().getFullYear();

const newYear = new Date(`Jan 1 ${timeCurrent + 1} 00:00:00`);

function timerCounter() {
  const todayDate = Date.now();
  // returns miliseconds fron 01.01.1970 - unixtime called

  const difference = newYear - todayDate;

  // Creating formulas to convert difference ms to days, hrs, min, sec

  // Method Math.floor allows to get int without ,
  const d = Math.floor(difference / 1000 / 60 / 60 / 24);

  // 1000 = ms; 60 = min; 60 = sec; 24 = day
  const h = Math.floor((difference / 1000 / 60 / 60) % 24);

  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  // Assign these variables to refs = <10 ? "0" : d; if value < 10 then we add 0.
  // setInterval(timerCounter, 1000)
}

// timerCounter();
