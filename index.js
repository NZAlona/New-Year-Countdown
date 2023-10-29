const refs = {
  spanTimer: document.querySelector('.js-time'),
  spanCountdown: document.querySelector('.js-countdown'),
};

const timer = setInterval(() => {
  const currentTime = new Date();

  const currentHours = currentTime.getHours();

  const currentMinutes = currentTime.getMinutes();

  const currentSeconds = currentTime.getSeconds();

  const formatTime = `${currentHours.toString().padStart(2, '0')} : ${currentMinutes
    .toString()
    .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

  refs.spanTimer.textContent = formatTime;

  const newTime = new Date('December 31, 2023 23:59:59');

  const remainedMs = newTime - currentTime;

  const finalTimeFormat = convertMs(remainedMs);

  const { days, hours, minutes, seconds } = finalTimeFormat;

  const message = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;

  refs.spanCountdown.textContent = message;
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
