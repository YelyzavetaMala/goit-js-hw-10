import iziToast from "izitoast";
import flatpickr from "flatpickr";
import "izitoast/dist/css/iziToast.min.css";
import "flatpickr/dist/flatpickr.min.css";

const btnEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');
let timeDifference = 0;
let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
onClose([selectedDates]) {
  timeDifference = 0;
  updateTimer(timeDifference);
  clearInterval(countdownInterval);
  const flag = selectedDates <= Date.now()  
  if (flag) {
    iziToast.error({
      title: "Error",
      message: "Please choose a date in the future",
    });
  }
     btnEl.disabled = flag;
  },
};

flatpickr(inputEl, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  spanDays.textContent = addLeadingZero(days);
  spanHours.textContent = addLeadingZero(hours);
  spanMinutes.textContent = addLeadingZero(minutes);
  spanSeconds.textContent = addLeadingZero(seconds);
}


btnEl.addEventListener("click", () => {
  const selectedDate = new Date(inputEl.value).getTime();
  const currentTime = new Date().getTime();
  timeDifference = selectedDate - currentTime;
  if (timeDifference <= 0) {
    iziToast.error({
      title: "Error",
      message: "Please choose a date in the future",
    });
    return;
  }

  
  updateTimer(timeDifference);

  
  countdownInterval = setInterval(() => {
    
    updateTimer(timeDifference);

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      iziToast.success({
        title: "Success",
        message: "Countdown has ended!",
      });
    }

    timeDifference -= 1000;
  }, 1000);
});
