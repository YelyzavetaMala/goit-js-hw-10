import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const delayInput = document.querySelector("[name='delay']");
  const stateRadios = document.querySelectorAll("[name='state']");
  const form = document.querySelector(".form");

  flatpickr(delayInput, {
    enableTime: false, 
    dateFormat: "U", 
    minDate: "today", 
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const delay = delayInput.value;
    const selectedState = Array.from(stateRadios).find(radio => radio.checked);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (selectedState.value === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
          title: "Success",
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "Error",
          message: `❌ Rejected promise in ${delay}ms`,
        });
      });
  });
});