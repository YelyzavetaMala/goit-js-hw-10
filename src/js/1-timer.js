import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "iziToast";
import "iziToast/dist/css/iziToast.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

 if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });

     
      document.querySelector("[data-start]").disabled = true;
    } else {
      
      document.querySelector("[data-start]").disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

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

console.log(convertMs(2000)); 
console.log(convertMs(140000)); 
console.log(convertMs(24140000)); 

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  document.querySelector("[data-days]").textContent = addLeadingZero(days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
  document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
  document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}

let countdownInterval;

document.querySelector("[data-start]").addEventListener("click", () => {
  const userSelectedDate = flatpickr("#datetime-picker").selectedDates[0];

  
  const timeDifference = userSelectedDate - new Date();

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
